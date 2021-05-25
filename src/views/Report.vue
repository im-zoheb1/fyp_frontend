<template>
  <div class="results-report">
    <cc-report title="Ali Akbar's Report">
      <cc-report-row title="Patient ID">2</cc-report-row>
      <cc-report-row title="Patient Name">Akbar Ali</cc-report-row>
      <cc-report-row title="Email address">akbar@gmail.com</cc-report-row>
      <cc-report-row title="Contact No.">3994929145</cc-report-row>
      <cc-report-row title="Pre existing conditions"
        >some pre-exsiting conditions</cc-report-row
      >
      <cc-report-row title="Age">33</cc-report-row>
      <cc-report-row title="Blood group">A+</cc-report-row>
      <cc-report-row title="result">negative</cc-report-row>
      <cc-report-row title="Blood group">Pending</cc-report-row>
    </cc-report>
  </div>
</template>

<script>
import CcReport from "@/components/Report/Report.vue";
import CcReportRow from "@/components/Report/ReportRow.vue";
export default {
  name: "ResultsReport",
  components: {
    ccReport: CcReport,
    ccReportRow: CcReportRow,
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
  background-color: var(--white-color-1);
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
