<template>
  <div class="results-report">
    <cc-navbar logo></cc-navbar>
    <cc-report :title="patient.name ? `${patient.name}'s Report` : ''">
      <cc-loader v-if="loadingStatus"></cc-loader>
      <cc-report-message
        v-if="failedMessage"
        :message="failedMessage"
      ></cc-report-message>
      <template v-if="!loadingStatus && patient.id">
        <cc-report-row title="Patient ID">{{ patient.id }}</cc-report-row>
        <cc-report-row title="Patient name">{{ patient.name }}</cc-report-row>
        <cc-report-row title="Email address">{{ patient.email }}</cc-report-row>
        <cc-report-row title="Pre existing conditions">{{
          patient.pre_existing_conditions
        }}</cc-report-row>
        <cc-report-row title="Age">{{ patient.age }}</cc-report-row>
        <cc-report-row title="Blood group">{{
          patient.blood_group
        }}</cc-report-row>
        <cc-report-row title="result">{{ patient.result }}</cc-report-row>
        <cc-report-row title="Status">{{ patient.status }}</cc-report-row>
        <cc-report-row title="Image">
          <img style="margin-top:1rem;" :src="patient.image" />
        </cc-report-row>
      </template>
    </cc-report>
  </div>
</template>

<script>
import CcReport from "@/components/Report/Report.vue";
import CcReportRow from "@/components/Report/ReportRow.vue";
import CcReportMessage from "@/components/Report/ReportMessage.vue";
import CcLoader from "@/components/CcLoader.vue";

import CcNavbar from "@/layouts/CcHomeNavBar.vue";

import { mapActions } from "vuex";
export default {
  name: "ResultsReport",
  components: {
    ccReport: CcReport,
    ccReportRow: CcReportRow,
    ccReportMessage: CcReportMessage,
    ccLoader: CcLoader,
    ccNavbar: CcNavbar,
  },
  computed: {
    loadingStatus() {
      return this.$store.getters["searchReport/loadingStatus"];
    },
    patient() {
      return this.$store.getters["searchReport/patient"];
    },
    failedMessage() {
      return this.$store.getters["searchReport/failedMessage"];
    },
  },
  methods: {
    ...mapActions("searchReport", ["getPatient"]),
  },
  mounted() {
    this.getPatient(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.results-report {
  border-radius: var(--border-radius);
  overflow-y: auto;
  min-height: 100vh;
  background: linear-gradient(
    to right bottom,
    var(--primary-color),
    var(--primary-dark-color)
  );
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
