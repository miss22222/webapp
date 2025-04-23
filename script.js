document.addEventListener('DOMContentLoaded', function() {

    // --- Simulated Data from Google Sheet ---
    // Source: https://docs.google.com/spreadsheets/d/1GtZoPJA-zEhlmBXqSmtMqs1Xf2mrt-22nNADKjFnpKo/edit?gid=1188786314#gid=1188786314
    const patientData = [
        { PatientID: "D-0001", Age: 59, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-15", Symptoms: "Fatigue; Headache; Fever; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0002", Age: 9, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-20", Symptoms: "Cough; Fatigue; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0003", Age: 47, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-15", Symptoms: "Sore Throat; Fatigue; Fever; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0004", Age: 87, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-19", Symptoms: "Fever; Fatigue; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0005", Age: 72, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Fever; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0006", Age: 13, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Headache; Cough", ConfirmedFlu: "Yes" },
        { PatientID: "D-0007", Age: 59, Gender: "Female", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-15", Symptoms: "Fever; Fatigue; Headache; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0008", Age: 65, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-17", Symptoms: "Fever; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0009", Age: 16, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-15", Symptoms: "Fatigue; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0010", Age: 79, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-15", Symptoms: "Sore Throat; Fever; Fatigue; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0011", Age: 71, Gender: "Male", Clinic: "Deira Health Center", DateOfVisit: "2025-04-15", Symptoms: "Fever; Headache; Sore Throat; Fatigue", ConfirmedFlu: "Yes" },
        { PatientID: "D-0012", Age: 81, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Fever; Headache; Fatigue; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0013", Age: 17, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-15", Symptoms: "Fatigue; Sore Throat; Cough", ConfirmedFlu: "Yes" },
        { PatientID: "D-0014", Age: 32, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-20", Symptoms: "Cough; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0015", Age: 60, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-19", Symptoms: "Sore Throat; Headache; Cough", ConfirmedFlu: "Yes" },
        { PatientID: "D-0016", Age: 8, Gender: "Male", Clinic: "Deira Health Center", DateOfVisit: "2025-04-16", Symptoms: "Cough; Fever; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0017", Age: 38, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Fatigue; Sore Throat; Fever; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0018", Age: 30, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-17", Symptoms: "Headache; Cough", ConfirmedFlu: "Yes" },
        { PatientID: "D-0019", Age: 86, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-15", Symptoms: "Sore Throat; Cough; Fever", ConfirmedFlu: "Yes" },
        { PatientID: "D-0020", Age: 48, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-19", Symptoms: "Headache; Fever; Cough", ConfirmedFlu: "Yes" },
        { PatientID: "D-0021", Age: 40, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-17", Symptoms: "Fatigue; Fever; Sore Throat; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0022", Age: 41, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-20", Symptoms: "Sore Throat; Fatigue", ConfirmedFlu: "Yes" },
        { PatientID: "D-0023", Age: 71, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-20", Symptoms: "Cough; Fatigue; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0024", Age: 8, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-20", Symptoms: "Cough; Fatigue; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0025", Age: 4, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-19", Symptoms: "Fatigue; Sore Throat; Fever", ConfirmedFlu: "Yes" },
        { PatientID: "D-0026", Age: 9, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Fever; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0027", Age: 43, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-17", Symptoms: "Cough; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0028", Age: 32, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Fever; Fatigue; Headache; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0029", Age: 37, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-19", Symptoms: "Fever; Headache; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0030", Age: 8, Gender: "Female", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-18", Symptoms: "Fever; Cough; Sore Throat; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0031", Age: 65, Gender: "Male", Clinic: "Deira Health Center", DateOfVisit: "2025-04-17", Symptoms: "Sore Throat; Cough; Fever", ConfirmedFlu: "No" },
        { PatientID: "D-0032", Age: 53, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Fatigue; Sore Throat; Cough; Fever", ConfirmedFlu: "Yes" },
        { PatientID: "D-0033", Age: 58, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-19", Symptoms: "Cough; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0034", Age: 81, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Cough; Fatigue; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0035", Age: 40, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-20", Symptoms: "Sore Throat; Fatigue; Fever", ConfirmedFlu: "No" },
        { PatientID: "D-0036", Age: 32, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-20", Symptoms: "Sore Throat; Fever; Fatigue", ConfirmedFlu: "No" },
        { PatientID: "D-0037", Age: 57, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-20", Symptoms: "Headache; Fever", ConfirmedFlu: "No" },
        { PatientID: "D-0038", Age: 41, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-17", Symptoms: "Fever; Fatigue", ConfirmedFlu: "No" },
        { PatientID: "D-0039", Age: 61, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-18", Symptoms: "Fatigue; Sore Throat; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0040", Age: 39, Gender: "Female", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-15", Symptoms: "Cough; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0041", Age: 53, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-18", Symptoms: "Sore Throat; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0042", Age: 40, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-17", Symptoms: "Fever; Sore Throat; Headache; Cough", ConfirmedFlu: "Yes" },
        { PatientID: "D-0043", Age: 18, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Sore Throat; Fever; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0044", Age: 51, Gender: "Male", Clinic: "Deira Health Center", DateOfVisit: "2025-04-16", Symptoms: "Cough; Fever; Fatigue; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0045", Age: 75, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-20", Symptoms: "Sore Throat; Cough; Fatigue", ConfirmedFlu: "No" },
        { PatientID: "D-0046", Age: 73, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Fever; Headache; Sore Throat; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0047", Age: 75, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-18", Symptoms: "Headache; Fatigue; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0048", Age: 77, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-16", Symptoms: "Fatigue; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0049", Age: 23, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Cough; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0050", Age: 86, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Fatigue; Sore Throat; Fever; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0051", Age: 29, Gender: "Female", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-15", Symptoms: "Sore Throat; Fever; Cough", ConfirmedFlu: "Yes" },
        { PatientID: "D-0052", Age: 31, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Cough; Sore Throat; Fever", ConfirmedFlu: "No" },
        { PatientID: "D-0053", Age: 64, Gender: "Male", Clinic: "Deira Health Center", DateOfVisit: "2025-04-20", Symptoms: "Cough; Fever", ConfirmedFlu: "Yes" },
        { PatientID: "D-0054", Age: 46, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Fatigue; Fever; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0055", Age: 74, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-18", Symptoms: "Fatigue; Headache; Cough; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0056", Age: 8, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-18", Symptoms: "Headache; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0057", Age: 78, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-17", Symptoms: "Cough; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0058", Age: 20, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-15", Symptoms: "Headache; Fever; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0059", Age: 46, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-17", Symptoms: "Sore Throat; Fatigue; Headache; Fever", ConfirmedFlu: "Yes" },
        { PatientID: "D-0060", Age: 21, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-20", Symptoms: "Headache; Fever; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0061", Age: 5, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-20", Symptoms: "Fatigue; Fever; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0062", Age: 23, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Fatigue; Headache; Fever", ConfirmedFlu: "Yes" },
        { PatientID: "D-0063", Age: 73, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-20", Symptoms: "Fatigue; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0064", Age: 66, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Fatigue; Sore Throat; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0065", Age: 21, Gender: "Female", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-16", Symptoms: "Cough; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0066", Age: 9, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-18", Symptoms: "Fever; Fatigue", ConfirmedFlu: "Yes" },
        { PatientID: "D-0067", Age: 15, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-20", Symptoms: "Headache; Fever; Fatigue; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0068", Age: 10, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-17", Symptoms: "Sore Throat; Cough; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0069", Age: 21, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Cough; Fatigue; Fever", ConfirmedFlu: "No" },
        { PatientID: "D-0070", Age: 16, Gender: "Female", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-15", Symptoms: "Cough; Fever; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0071", Age: 51, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Fever; Cough; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0072", Age: 19, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-18", Symptoms: "Fatigue; Cough; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0073", Age: 81, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-20", Symptoms: "Fatigue; Headache; Sore Throat; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0074", Age: 67, Gender: "Female", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-20", Symptoms: "Cough; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0075", Age: 56, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-19", Symptoms: "Fever; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0076", Age: 43, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-20", Symptoms: "Sore Throat; Fever; Cough; Fatigue", ConfirmedFlu: "Yes" },
        { PatientID: "D-0077", Age: 89, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-17", Symptoms: "Fever; Headache; Cough; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0078", Age: 20, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-16", Symptoms: "Headache; Cough; Sore Throat; Fatigue", ConfirmedFlu: "No" },
        { PatientID: "D-0079", Age: 25, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-16", Symptoms: "Fatigue; Sore Throat; Cough; Fever", ConfirmedFlu: "Yes" },
        { PatientID: "D-0080", Age: 40, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-18", Symptoms: "Sore Throat; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0081", Age: 2, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-17", Symptoms: "Fever; Fatigue; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0082", Age: 53, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-19", Symptoms: "Cough; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0083", Age: 88, Gender: "Female", Clinic: "Deira Health Center", DateOfVisit: "2025-04-17", Symptoms: "Headache; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0084", Age: 60, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-18", Symptoms: "Headache; Fatigue; Fever", ConfirmedFlu: "Yes" },
        { PatientID: "D-0085", Age: 59, Gender: "Female", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-16", Symptoms: "Sore Throat; Cough; Fever", ConfirmedFlu: "No" },
        { PatientID: "D-0086", Age: 52, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-20", Symptoms: "Fever; Headache; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0087", Age: 21, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-15", Symptoms: "Fever; Headache", ConfirmedFlu: "Yes" },
        { PatientID: "D-0088", Age: 26, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-20", Symptoms: "Fatigue; Headache; Cough; Sore Throat", ConfirmedFlu: "No" },
        { PatientID: "D-0089", Age: 7, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-16", Symptoms: "Headache; Fatigue; Fever", ConfirmedFlu: "No" },
        { PatientID: "D-0090", Age: 8, Gender: "Male", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-19", Symptoms: "Headache; Fever; Cough; Fatigue", ConfirmedFlu: "Yes" },
        { PatientID: "D-0091", Age: 28, Gender: "Male", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-20", Symptoms: "Fatigue; Cough; Headache; Sore Throat", ConfirmedFlu: "Yes" },
        { PatientID: "D-0092", Age: 61, Gender: "Male", Clinic: "Deira Health Center", DateOfVisit: "2025-04-15", Symptoms: "Fatigue; Sore Throat; Cough; Headache", ConfirmedFlu: "No" },
        { PatientID: "D-0093", Age: 11, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-19", Symptoms: "Fatigue; Sore Throat; Cough", ConfirmedFlu: "Yes" },
        { PatientID: "D-0094", Age: 36, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-18", Symptoms: "Sore Throat; Cough; Fever", ConfirmedFlu: "Yes" },
        { PatientID: "D-0095", Age: 18, Gender: "Female", Clinic: "Deira Urgent Care", DateOfVisit: "2025-04-16", Symptoms: "Cough; Fatigue", ConfirmedFlu: "Yes" },
        { PatientID: "D-0096", Age: 10, Gender: "Male", Clinic: "Deira Clinic B", DateOfVisit: "2025-04-19", Symptoms: "Sore Throat; Headache; Cough", ConfirmedFlu: "No" },
        { PatientID: "D-0097", Age: 19, Gender: "Female", Clinic: "Deira Clinic A", DateOfVisit: "2025-04-18", Symptoms: "Fever; Sore Throat; Headache; Fatigue", ConfirmedFlu: "No" },
        { PatientID: "D-0098", Age: 15, Gender: "Male", Clinic: "Deira Health Center", DateOfVisit: "2025-04-15", Symptoms: "Fatigue; Headache; Cough; Fever", ConfirmedFlu: "No" },
        { PatientID: "D-0099", Age: 76, Gender: "Male", Clinic: "Deira Health Center", DateOfVisit: "2025-04-18", Symptoms: "Fever; Headache; Sore Throat; Fatigue", ConfirmedFlu: "No" }
    ];

    const roleSelect = document.getElementById('roleSelect');
    const dashboardViews = document.querySelectorAll('.dashboard-view');

    // --- Element References ---
    // Dr. Ayesha
    const ayeshaAlertText = document.querySelector('#view-ayesha .heatmap-placeholder p strong');
    const ayeshaHeatmapArea = document.querySelector('#view-ayesha .heatmap-placeholder .map-area'); // Restore old reference
    const ayeshaTrendChartArea = document.querySelector('#view-ayesha .trend-chart-placeholder .chart-area');
    const ayeshaTrendDataSources = document.querySelector('#view-ayesha .trend-chart-placeholder small');
    const heatmapWhyBtn = document.getElementById('heatmapWhyBtn');
    const heatmapWhyFeedback = document.getElementById('heatmapWhyFeedback');
    // Plan Recommendation
    const approvePlanBtn = document.getElementById('approvePlanBtn');
    const modifyPlanBtn = document.getElementById('modifyPlanBtn');
    const declinePlanBtn = document.getElementById('declinePlanBtn');
    const planFeedback = document.getElementById('planFeedback');
    // Logistics Recommendation
    const sendLogisticsAlertBtn = document.getElementById('sendLogisticsAlertBtn');
    const dismissLogisticsBtn = document.getElementById('dismissLogisticsBtn');
    const logisticsFeedback = document.getElementById('logisticsFeedback');
    // Campaign Recommendation
    const initiateCampaignBtn = document.getElementById('initiateCampaignBtn');
    const scheduleCampaignBtn = document.getElementById('scheduleCampaignBtn');
    const declineCampaignBtn = document.getElementById('declineCampaignBtn');
    const campaignFeedback = document.getElementById('campaignFeedback');
    // Advisory Recommendation
    const issueAdvisoryBtn = document.getElementById('issueAdvisoryBtn');
    const reviewAdvisoryBtn = document.getElementById('reviewAdvisoryBtn');
    const declineAdvisoryBtn = document.getElementById('declineAdvisoryBtn');
    const advisoryFeedback = document.getElementById('advisoryFeedback');

    // Imran
    const imranAlertMessage = document.getElementById('imranAlertMessage');
    const imranShortfallMessage = document.getElementById('imranShortfallMessage');
    const imranActionMessage = document.getElementById('imranActionMessage');
    const imranRouteDetails = document.getElementById('imranRouteDetails');
    const confirmDispatchBtn = document.getElementById('confirmDispatchBtn');
    const modifyDispatchBtn = document.getElementById('modifyDispatchBtn');
    const shipmentStatus = document.getElementById('shipmentStatus');
    const imranActivityLog = document.getElementById('imranActivityLog');
    const imranViewStockDetailsBtn = document.getElementById('imranViewStockDetailsBtn');
    const imranAdjustThresholdsBtn = document.getElementById('imranAdjustThresholdsBtn');
    const imranStockFeedback = document.getElementById('imranStockFeedback');

    // Leila
    const leilaUrgentAlertContainer = document.getElementById('leilaUrgentAlert');
    const leilaUrgentAlertText = document.getElementById('leilaUrgentAlertText');
    const leilaUrgentAlertTime = document.getElementById('leilaUrgentAlertTime');
    const leilaForecastChartArea = document.querySelector('#view-leila .local-forecast-card .chart-area'); // Reference for Leila's chart
    const leilaStockTableBody = document.querySelector('#leilaStockTable tbody');
    const leilaActionedBtn = document.getElementById('leilaActionedBtn');
    const leilaActionedFeedback = document.getElementById('leilaActionedFeedback');
    const leilaConfirmationMsg = document.getElementById('leilaConfirmationMsg');
    const leilaRequestOrderBtn = document.getElementById('leilaRequestOrderBtn');
    const leilaViewHistoryBtn = document.getElementById('leilaViewHistoryBtn');
    const leilaStockFeedback = document.getElementById('leilaStockFeedback');
    const leilaApplyPromoBtn = document.getElementById('leilaApplyPromoBtn');
    const leilaDismissPromoBtn = document.getElementById('leilaDismissPromoBtn');
    const leilaApplyPlacementBtn = document.getElementById('leilaApplyPlacementBtn');
    const leilaDismissPlacementBtn = document.getElementById('leilaDismissPlacementBtn');
    const leilaRecFeedback = document.getElementById('leilaRecFeedback');

    // Faisal
    const faisalDemandSignal = document.getElementById('faisalDemandSignal');
    const faisalProdRecommendation = document.getElementById('faisalProdRecommendation');
    const faisalProdQueue = document.getElementById('faisalProdQueue');
    const faisalDemandChartArea = document.querySelector('#view-faisal .national-demand-card .chart-area'); // Reference for Faisal's chart
    const faisalAutoAdjustToggle = document.getElementById('faisalAutoAdjustToggle');
    const faisalManualOverrideBtn = document.getElementById('faisalManualOverrideBtn');
    const faisalViewProdDetailsBtn = document.getElementById('faisalViewProdDetailsBtn');
    const faisalProdFeedback = document.getElementById('faisalProdFeedback');
    const faisalViewSuppliersBtn = document.getElementById('faisalViewSuppliersBtn');
    const faisalPlaceMaterialOrderBtn = document.getElementById('faisalPlaceMaterialOrderBtn');
    const faisalMaterialFeedback = document.getElementById('faisalMaterialFeedback');

    // Reem
    const retrainModelBtn = document.getElementById('retrainModelBtn');
    const lastRetrainingTime = document.getElementById('lastRetrainingTime');
    const retrainConfirmationMsg = document.getElementById('retrainConfirmationMsg');
    const reemRunSimulationBtn = document.getElementById('reemRunSimulationBtn');
    const reemCompareModelsBtn = document.getElementById('reemCompareModelsBtn');
    const reemSimFeedback = document.getElementById('reemSimFeedback');
    const reemDeployUpdateBtn = document.getElementById('reemDeployUpdateBtn');
    const reemRollbackBtn = document.getElementById('reemRollbackBtn');
    const reemDeployFeedback = document.getElementById('reemDeployFeedback');

    // NEW: Summary View Refs
    const kpiShortages = document.getElementById('kpiShortages');
    const kpiResponseTime = document.getElementById('kpiResponseTime');
    const kpiWastage = document.getElementById('kpiWastage');
    const kpiEfficiency = document.getElementById('kpiEfficiency');
    const impactChartCost = document.getElementById('impactChartCost');
    const impactChartLives = document.getElementById('impactChartLives');
    const impactChartSustainability = document.getElementById('impactChartSustainability');

    // --- State Variables ---
    let planApproved = false;
    let logisticsAlertSent = false; // If separate alert button is used
    let shipmentDispatched = false;
    let pharmacyPrepared = false; // This will be our trigger for "workflow complete"
    let planDecisionMade = false;
    let logisticsDecisionMade = false;
    let campaignDecisionMade = false;
    let advisoryDecisionMade = false;
    let faisalAutoAdjustEnabled = false;

    // --- Helper Functions ---
    function showConfirmation(element, message) {
        element.textContent = message;
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
            element.textContent = '';
        }, 3000); // Hide after 3 seconds
    }

    function getCurrentTime() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function showFeedback(element, message, color = '#555') {
        if (element) {
            element.textContent = message;
            element.style.color = color;
            element.style.display = 'block';
        } else {
            console.warn("Feedback element not found for message:", message);
        }
    }

    // New helper to add log entries
    function addLogEntry(logElement, message, iconClass = 'fa-info-circle', color = '#333') {
        if (logElement) {
            const listItem = document.createElement('li');
            listItem.style.color = color;
            // Sanitize message before setting innerHTML if needed, but for this prototype, assuming safe content
            listItem.innerHTML = `<i class="fas ${iconClass}"></i> [${getCurrentTime()}] ${message}`;
            // Add to the top of the list
            if (logElement.firstChild) {
                logElement.insertBefore(listItem, logElement.firstChild);
            } else {
                logElement.appendChild(listItem);
            }
            // Optional: Limit log length
            while (logElement.children.length > 10) { // Keep last 10 entries
                 logElement.removeChild(logElement.lastChild);
            }
        } else {
            console.warn("Log element not found for message:", message);
        }
    }

    // Helper to disable buttons within the same parent action group
    function disableActionButtons(buttonElement) {
        const actionDiv = buttonElement.closest('.action-buttons, .card-actions');
        if (actionDiv) {
            actionDiv.querySelectorAll('button').forEach(btn => {
                btn.disabled = true;
            });
        } else {
            // Fallback for single buttons or different structures
            buttonElement.disabled = true;
        }
    }

    // --- Data Processing Functions ---
    function processDataForDashboard() {
        const confirmedCasesByClinic = {};
        const symptomReportsByDate = {};
        const totalVisits = patientData.length;
        let totalConfirmedFlu = 0;
        const uniqueDates = [...new Set(patientData.map(p => p.DateOfVisit))].sort();

        patientData.forEach(patient => {
            // Count confirmed cases per clinic
            if (patient.ConfirmedFlu === "Yes") {
                totalConfirmedFlu++;
                confirmedCasesByClinic[patient.Clinic] = (confirmedCasesByClinic[patient.Clinic] || 0) + 1;
            }

            // Count visits per date (as a proxy for symptom reports)
            symptomReportsByDate[patient.DateOfVisit] = (symptomReportsByDate[patient.DateOfVisit] || 0) + 1;
        });

        // Prepare data for display
        const heatmapSummary = Object.entries(confirmedCasesByClinic)
            .sort(([, countA], [, countB]) => countB - countA) // Sort by count descending
            .map(([clinic, count]) => {
                let riskLevel = 'Low';
                let color = 'green';
                // Adjusted thresholds based on sample data size
                if (count >= 10) { riskLevel = 'High'; color = 'red'; }
                else if (count >= 5) { riskLevel = 'Medium'; color = 'orange'; }
                return `<div style="margin-bottom: 5px;"><span style="color:${color}; font-weight:bold;">${riskLevel} Risk</span> - ${clinic}: ${count} confirmed cases</div>`;
            })
            .join('');

        // Simple bar chart representation for trend
        const maxDailyVisits = Math.max(...Object.values(symptomReportsByDate), 0);
        const trendSummary = uniqueDates.map(date => {
            const count = symptomReportsByDate[date] || 0;
            // Calculate height relative to chart area height (e.g., 130px available)
            const barHeight = maxDailyVisits > 0 ? (count / maxDailyVisits) * 50 : 0; // Max height 50px
            return `<div style="display: inline-block; margin-right: 5px; text-align: center; vertical-align: bottom;">
                        <div style="width: 20px; height: ${barHeight}px; background-color: #0a2e5c; margin: 0 auto;"></div>
                        <small style="font-size: 0.7em;">${date.substring(5)}</small> <!-- Show MM-DD -->
                    </div>`;
        }).join('');


        const overallConfirmationRate = totalVisits > 0 ? ((totalConfirmedFlu / totalVisits) * 100).toFixed(1) : 0;

        // --- Update Dashboard Elements (Initial State - Primarily Ayesha) ---
        // Dr. Ayesha
        if (ayeshaAlertText) {
            ayeshaAlertText.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ALERT: Flu Surge Detected in Deira (${overallConfirmationRate}% confirmation rate)`;
            // Remove the loading spinner icon once data is processed
            const loadingIcon = ayeshaAlertText.querySelector('.fa-spin');
            if (loadingIcon) loadingIcon.remove();
        }

        if (ayeshaHeatmapArea) { // Restore check and innerHTML injection
            // Inject simulated map risk points HTML
            // Note: top/left percentages are approximate locations on the map area
            ayeshaHeatmapArea.innerHTML = `
                <div class="map-risk-point risk-low" style="top: 75%; left: 25%;" title="Al Barsha (Low)">L</div>
                <div class="map-risk-point risk-low" style="top: 40%; left: 15%;" title="Jumeirah (Low)">L</div>
                <div class="map-risk-point risk-medium" style="top: 50%; left: 40%;" title="Downtown (Medium)">M</div>
                <div class="map-risk-point risk-medium" style="top: 55%; left: 50%;" title="Business Bay (Medium)">M</div>

                <div class="map-risk-point risk-low" style="top: 60%; left: 10%;" title="Umm Suqeim (Low)">L</div>
                <div class="map-risk-point risk-medium" style="top: 45%; left: 65%;" title="Bur Dubai (Medium)">M</div>
                <div class="map-risk-point risk-critical" style="top: 30%; left: 75%;" title="Deira (Critical)">C</div>
                <div class="map-risk-point risk-high" style="top: 40%; left: 80%;" title="Al Karama (High)">H</div>

                <div class="map-risk-point risk-low" style="top: 85%; left: 35%;" title="Marina (Low)">L</div>
                <div class="map-risk-point risk-low" style="top: 90%; left: 45%;" title="JLT (Low)">L</div>
                <div class="map-risk-point risk-medium" style="top: 15%; left: 85%;" title="Al Nahda (Medium)">M</div>
                <div class="map-risk-point risk-low" style="top: 20%; left: 95%;" title="Mirdif (Low)">L</div>

                <!-- Optional: Add a simple legend -->
                <div style="position: absolute; bottom: 5px; left: 5px; background: rgba(255,255,255,0.8); padding: 3px 5px; border-radius: 3px; font-size: 0.9em;">
                    Risk: <span class="map-risk-point risk-low" style="position:static; display:inline-block; width:12px; height:12px; transform:none; margin: 0 2px;"></span> Low
                    <span class="map-risk-point risk-medium" style="position:static; display:inline-block; width:12px; height:12px; transform:none; margin: 0 2px;"></span> Med
                    <span class="map-risk-point risk-high" style="position:static; display:inline-block; width:12px; height:12px; transform:none; margin: 0 2px;"></span> High
                    <span class="map-risk-point risk-critical" style="position:static; display:inline-block; width:12px; height:12px; transform:none; margin: 0 2px;"></span> Crit
                </div>
            `;
            // Remove the loading message if it was separate
            const loadingMsg = ayeshaHeatmapArea.querySelector('.map-loading');
            if (loadingMsg) loadingMsg.remove();
        }

        if (ayeshaTrendChartArea) {
            // Restore original placeholder style
            ayeshaTrendChartArea.className = 'chart-area'; // Ensure no extra classes
            ayeshaTrendChartArea.innerHTML = `<strong>Daily Visits (Symptom Reports):</strong><br><div style="height: 60px; border: 1px solid #ccc; padding: 5px; overflow-x: auto; white-space: nowrap;">${trendSummary || 'No visit data.'}</div>`;
        }
         if (ayeshaTrendDataSources) {
             ayeshaTrendDataSources.textContent = `Data Sources: ${totalVisits} GP/Clinic Visits (Simulated), Social Media Mentions ('flu', 'fever')`;
         }

        // Add updates for other personas if needed, using the processed data
        // e.g., Update Leila's local forecast based on Deira Urgent Care counts
        // Note: This part was removed in the revert, as the button clicks will now handle populating other views.
    }

    // --- View Switching Logic (Updated) ---
    function switchView(selectedRole) {
        console.log(`Attempting to switch view to: ${selectedRole}`); // Add log
        dashboardViews.forEach(view => {
            view.classList.remove('active-view');
        });

        // Construct the ID based on the selected role value
        const viewId = `view-${selectedRole}`;
        const activeView = document.getElementById(viewId);

        if (activeView) {
            activeView.classList.add('active-view');
            console.log(`Successfully switched to view: ${viewId}`);
        } else {
            // Handle cases where the ID might not follow the pattern (though it does here)
            // Or log an error if the element truly doesn't exist.
            console.error(`View element not found for ID: ${viewId}`);
        }
    }

    roleSelect.addEventListener('change', function() {
        switchView(this.value);
    });

    // --- Interaction Logic ---

    // --- Dr. Ayesha's Recommendations ---

    // 0. View Plan Button (Doesn't affect state)
    if (viewPlanBtn) {
        viewPlanBtn.addEventListener('click', function() {
            console.log("Ayesha: View Plan button clicked.");
            // Populate modal content
            if (modalBody) {
                modalBody.innerHTML = `
                    <p><strong>Objective:</strong> Mitigate Flu Surge Impact in Deira Region.</p>
                    <h4>Key Actions:</h4>
                    <ol>
                        <li><strong>Resource Allocation:</strong> Prioritize Deira clinics/hospitals for staffing & ventilator support. (Trigger: Operational Strain > 4)</li>
                        <li><strong>Logistics Trigger:</strong> Authorize Imran (Logistics) to initiate stock redistribution based on AI forecast. (Trigger: This Approval)</li>
                        <li><strong>Public Health Comms:</strong> Launch targeted awareness campaign (Rec #3).</li>
                        <li><strong>School Protocols:</strong> Issue advisory for enhanced screening (Rec #4).</li>
                        <li><strong>Monitoring:</strong> Increase frequency of data pulls from GP/Social Media feeds.</li>
                    </ol>
                    <p><strong>Estimated Duration:</strong> 7-10 days active phase.</p>
                    <p><strong>Success Metrics:</strong> ICU demand below 90% capacity, Shortage prevention > 95%.</p>
                `;
            }

            // Show the modal
            if (planModal) {
                planModal.style.display = 'block';
            }

            showFeedback(planFeedback, 'Displaying simulated plan details.', 'blue');
            // Note: This button does NOT disable others or change main state variables.
        });
    } else { console.error("viewPlanBtn not found"); }

    // 1. Health Action Plan (Approve/Modify/Decline)
    if (approvePlanBtn) {
        approvePlanBtn.addEventListener('click', function() {
            if (!planApproved && !planDecisionMade) {
                console.log("Ayesha: Approve Plan button clicked.");
                planApproved = true; // MAIN STATE CHANGE FOR WORKFLOW
                planDecisionMade = true;
                this.disabled = true;
                if (modifyPlanBtn) modifyPlanBtn.disabled = true;
                if (declinePlanBtn) declinePlanBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-check-double"></i> Plan Approved';
                showFeedback(planFeedback, 'Action Plan approved and initiated.', 'green');
                addLogEntry(imranActivityLog, 'Health Action Plan APPROVED by Dr. Ayesha.', 'fa-check-double', 'green');
                console.log("Ayesha: Plan Approved. Updating Imran's dashboard and enabling his buttons.");

                // --- Update Imran's Dashboard ---
                const overallConfirmationRate = patientData.length > 0 ? ((patientData.filter(p => p.ConfirmedFlu === "Yes").length / patientData.length) * 100).toFixed(1) : 0;
                if (imranAlertMessage) {
                    imranAlertMessage.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i> ACTION: Health Action Plan Approved. Proceed with redistribution.';
                    imranAlertMessage.style.color = 'green';
                    imranAlertMessage.style.fontWeight = 'bold';
                }
                if (imranShortfallMessage) {
                    imranShortfallMessage.textContent = 'Forecasted Shortfall (Next 48h): Antivirals - 450 units, Vaccines - 600 units.';
                    imranShortfallMessage.style.color = 'red';
                }
                if (imranActionMessage) {
                    imranActionMessage.textContent = 'AI Recommendation: Initiate Route Plan Alpha (Hub -> Pharmacy A -> Pharmacy B). Prioritize Antivirals.';
                }
                if (imranRouteDetails) {
                    // Inject simulated route map SVG + HTML points
                    imranRouteDetails.innerHTML = `
                        <div class="map-point point-hub"><i class="fas fa-warehouse"></i> Hub</div>
                        <div class="map-point point-pharmacy1"><i class="fas fa-clinic-medical"></i> Pharm A</div>
                        <div class="map-point point-pharmacy2"><i class="fas fa-clinic-medical"></i> Pharm B</div>
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                            <!-- Dashed line for planned route -->
                            <polyline points="20,20 65,45 45,75" fill="none" stroke="#0a2e5c" stroke-width="2" stroke-dasharray="4,2"/>
                            <!-- Optional: Arrow heads (simple triangles) -->
                            <polygon points="65,45 62,43 62,47" fill="#0a2e5c" />
                            <polygon points="45,75 43,72 47,72" fill="#0a2e5c" />
                        </svg>
                        <div style="position:absolute; bottom: 5px; right: 5px; font-size:0.8em; background:rgba(255,255,255,0.7); padding: 2px;">Route Alpha</div>
                    `;
                }
                if (confirmDispatchBtn) confirmDispatchBtn.disabled = false;
                if (modifyDispatchBtn) modifyDispatchBtn.disabled = false;

                if (shipmentStatus) {
                    shipmentStatus.innerHTML = '<i class="fas fa-shipping-fast"></i> Dispatched (ETA: 4 hours)';
                    shipmentStatus.className = 'status-dispatched';
                    shipmentStatus.style.color = 'green';
                    shipmentStatus.style.fontWeight = 'bold';
                }

                // --- Update Leila's Dashboard ---
                if (leilaUrgentAlertContainer) leilaUrgentAlertContainer.style.display = 'block';
                if (leilaUrgentAlertText) {
                    leilaUrgentAlertText.innerHTML = `<strong><i class="fas fa-truck"></i> INCOMING STOCK:</strong> Flu demand rising rapidly. Replenishment shipment (#FLU-DXB-001) is <strong>en route</strong>. <strong>ETA: Approx 4 hours.</strong> Prepare storage.`;
                }
                 if (leilaUrgentAlertTime) {
                    leilaUrgentAlertTime.textContent = `Received: ${getCurrentTime()}`;
                }
                if (leilaUrgentAlertContainer) {
                    leilaUrgentAlertContainer.className = 'alert-item urgent';
                }
                if (leilaActionedBtn) {
                     leilaActionedBtn.disabled = false;
                     console.log("Imran: Enabled Leila's Actioned button.");
                }

                if (leilaForecastChartArea) {
                    leilaForecastChartArea.innerHTML = `<strong style="color:red;">[Forecast Update: Significant increase expected. Antivirals +300%, Vaccines +250%, Masks +150%, Sanitizers +100%]</strong>`;
                }
            } else {
                 console.log("Ayesha: Approve Plan button clicked, but plan already approved or decision made.");
            }
        });
    } else { console.error("approvePlanBtn not found"); }

    if (modifyPlanBtn) {
        modifyPlanBtn.addEventListener('click', function() {
            if (!planApproved && !planDecisionMade) {
                planDecisionMade = true; // Mark decision made, prevents approval/decline now
                this.disabled = true;
                if (approvePlanBtn) approvePlanBtn.disabled = true;
                if (declinePlanBtn) declinePlanBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-edit"></i> Modifying...';
                showFeedback(planFeedback, 'Plan flagged for modification. Please review details (simulation).', 'orange');
                addLogEntry(imranActivityLog, 'Health Action Plan flagged for MODIFICATION by Dr. Ayesha.', 'fa-edit', 'orange');
                console.log("Ayesha: Modify Plan button clicked.");
                // In a real app, this would open an editor or navigate somewhere.
            }
        });
    } else { console.error("modifyPlanBtn not found"); }

    if (declinePlanBtn) {
        declinePlanBtn.addEventListener('click', function() {
             if (!planApproved && !planDecisionMade) {
                planDecisionMade = true; // Mark decision made
                this.disabled = true;
                if (approvePlanBtn) approvePlanBtn.disabled = true;
                if (modifyPlanBtn) modifyPlanBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-times"></i> Declined';
                showFeedback(planFeedback, 'Action Plan declined. Reason logged (simulation).', 'red');
                addLogEntry(imranActivityLog, 'Health Action Plan recommendation DECLINED by Dr. Ayesha.', 'fa-times', 'red');
                console.log("Ayesha: Decline Plan button clicked.");
                // In a real app, might prompt for reason. Workflow stops here for this plan.
            }
        });
    } else { console.error("declinePlanBtn not found"); }


    // 2. Logistics Alert (Explicit Send/Dismiss)
    if (sendLogisticsAlertBtn) {
        // Note: This button's primary function might change depending on whether
        // Ayesha's *approval* automatically triggers Imran, or if she needs to explicitly send.
        // Current logic assumes approval triggers Imran, so this is more like a manual override/confirmation.
        sendLogisticsAlertBtn.addEventListener('click', function() {
            if (!logisticsAlertSent && !logisticsDecisionMade) {
                 console.log("Ayesha: Send Logistics Alert NOW button clicked.");
                logisticsAlertSent = true; // Mark step complete
                logisticsDecisionMade = true;
                this.disabled = true;
                if (dismissLogisticsBtn) dismissLogisticsBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-paper-plane"></i> Alert Sent';
                showFeedback(logisticsFeedback, 'Manual logistics alert sent.', 'green');
                addLogEntry(imranActivityLog, 'Manual Logistics Alert sent by Dr. Ayesha.', 'fa-paper-plane', 'blue');
                console.log("Ayesha: Manual Logistics Alert sent.");
                // Potentially trigger another update for Imran if needed, or just log.
            }
        });
    } else { console.error("sendLogisticsAlertBtn not found"); }

     if (dismissLogisticsBtn) {
        dismissLogisticsBtn.addEventListener('click', function() {
             if (!logisticsAlertSent && !logisticsDecisionMade) {
                logisticsDecisionMade = true;
                this.disabled = true;
                if (sendLogisticsAlertBtn) sendLogisticsAlertBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-ban"></i> Dismissed';
                showFeedback(logisticsFeedback, 'Logistics alert recommendation dismissed.', 'red');
                addLogEntry(imranActivityLog, 'Logistics Alert recommendation DISMISSED by Dr. Ayesha.', 'fa-ban', 'grey');
                console.log("Ayesha: Dismiss Logistics Alert button clicked.");
            }
        });
    } else { console.error("dismissLogisticsBtn not found"); }


    // 3. Public Awareness Campaign
    if (initiateCampaignBtn) {
        initiateCampaignBtn.addEventListener('click', function() {
            if (!campaignDecisionMade) {
                campaignDecisionMade = true;
                this.disabled = true;
                if(scheduleCampaignBtn) scheduleCampaignBtn.disabled = true;
                if(declineCampaignBtn) declineCampaignBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-play-circle"></i> Initiated';
                showFeedback(campaignFeedback, 'Public awareness campaign initiated.', 'green');
                addLogEntry(imranActivityLog, 'Public Awareness Campaign INITIATED by Dr. Ayesha.', 'fa-bullhorn', 'blue');
                console.log("Ayesha: Initiate Campaign button clicked.");
            }
        });
    } else { console.error("initiateCampaignBtn not found"); }

    if (scheduleCampaignBtn) {
        scheduleCampaignBtn.addEventListener('click', function() {
            if (!campaignDecisionMade) {
                campaignDecisionMade = true;
                this.disabled = true;
                if(initiateCampaignBtn) initiateCampaignBtn.disabled = true;
                if(declineCampaignBtn) declineCampaignBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-calendar-alt"></i> Scheduled';
                showFeedback(campaignFeedback, 'Campaign scheduled for later deployment.', 'orange');
                addLogEntry(imranActivityLog, 'Public Awareness Campaign SCHEDULED by Dr. Ayesha.', 'fa-calendar-alt', 'grey');
                console.log("Ayesha: Schedule Campaign button clicked.");
            }
        });
    } else { console.error("scheduleCampaignBtn not found"); }

    if (declineCampaignBtn) {
        declineCampaignBtn.addEventListener('click', function() {
            if (!campaignDecisionMade) {
                campaignDecisionMade = true;
                this.disabled = true;
                if(initiateCampaignBtn) initiateCampaignBtn.disabled = true;
                if(scheduleCampaignBtn) scheduleCampaignBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-times"></i> Declined';
                showFeedback(campaignFeedback, 'Campaign recommendation declined.', 'red');
                addLogEntry(imranActivityLog, 'Public Awareness Campaign recommendation DECLINED by Dr. Ayesha.', 'fa-times', 'grey');
                console.log("Ayesha: Decline Campaign button clicked.");
            }
        });
    } else { console.error("declineCampaignBtn not found"); }


    // 4. School Advisory
    if (issueAdvisoryBtn) {
        issueAdvisoryBtn.addEventListener('click', function() {
             if (!advisoryDecisionMade) {
                advisoryDecisionMade = true;
                this.disabled = true;
                if(reviewAdvisoryBtn) reviewAdvisoryBtn.disabled = true;
                if(declineAdvisoryBtn) declineAdvisoryBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-paper-plane"></i> Issued';
                showFeedback(advisoryFeedback, 'School advisory issued.', 'green');
                addLogEntry(imranActivityLog, 'School Advisory ISSUED by Dr. Ayesha.', 'fa-school', 'blue');
                console.log("Ayesha: Issue Advisory button clicked.");
            }
        });
    } else { console.error("issueAdvisoryBtn not found"); }

    if (reviewAdvisoryBtn) {
        reviewAdvisoryBtn.addEventListener('click', function() {
             if (!advisoryDecisionMade) {
                advisoryDecisionMade = true;
                this.disabled = true;
                if(issueAdvisoryBtn) issueAdvisoryBtn.disabled = true;
                if(declineAdvisoryBtn) declineAdvisoryBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-edit"></i> Reviewing...';
                showFeedback(advisoryFeedback, 'Advisory flagged for review/modification.', 'orange');
                addLogEntry(imranActivityLog, 'School Advisory flagged for REVIEW by Dr. Ayesha.', 'fa-edit', 'grey');
                console.log("Ayesha: Review Advisory button clicked.");
            }
        });
    } else { console.error("reviewAdvisoryBtn not found"); }

    if (declineAdvisoryBtn) {
        declineAdvisoryBtn.addEventListener('click', function() {
             if (!advisoryDecisionMade) {
                advisoryDecisionMade = true;
                this.disabled = true;
                if(issueAdvisoryBtn) issueAdvisoryBtn.disabled = true;
                if(reviewAdvisoryBtn) reviewAdvisoryBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-times"></i> Declined';
                showFeedback(advisoryFeedback, 'School advisory recommendation declined.', 'red');
                addLogEntry(imranActivityLog, 'School Advisory recommendation DECLINED by Dr. Ayesha.', 'fa-times', 'grey');
                console.log("Ayesha: Decline Advisory button clicked.");
            }
        });
    } else { console.error("declineAdvisoryBtn not found"); }


    // --- Imran's Actions ---
    if (confirmDispatchBtn) {
        confirmDispatchBtn.disabled = true; // Start disabled
        confirmDispatchBtn.addEventListener('click', function() {
            console.log("Imran: Confirm Dispatch button clicked. Checking conditions (planApproved:", planApproved, "shipmentDispatched:", shipmentDispatched, ")");
            // Ensure the MAIN plan was approved before allowing dispatch
            if (planApproved && !shipmentDispatched) {
                shipmentDispatched = true; // MAIN STATE CHANGE FOR WORKFLOW
                this.disabled = true;
                if (modifyDispatchBtn) modifyDispatchBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-truck-loading"></i> Dispatched';
                addLogEntry(imranActivityLog, 'Shipment dispatch CONFIRMED.', 'fa-truck-loading', 'green');
                console.log("Imran: Shipment Dispatched. Updating Leila's dashboard and enabling her button.");

                // Update Imran's own status
                if (shipmentStatus) {
                    shipmentStatus.innerHTML = '<i class="fas fa-shipping-fast"></i> Dispatched (ETA: 4 hours)';
                    shipmentStatus.className = 'status-dispatched';
                    shipmentStatus.style.color = 'green';
                    shipmentStatus.style.fontWeight = 'bold';
                }

                // --- Update Leila's Dashboard ---
                if (leilaUrgentAlertContainer) leilaUrgentAlertContainer.style.display = 'block';
                if (leilaUrgentAlertText) {
                    leilaUrgentAlertText.innerHTML = `<strong><i class="fas fa-truck"></i> INCOMING STOCK:</strong> Flu demand rising rapidly. Replenishment shipment (#FLU-DXB-001) is <strong>en route</strong>. <strong>ETA: Approx 4 hours.</strong> Prepare storage.`;
                }
                 if (leilaUrgentAlertTime) {
                    leilaUrgentAlertTime.textContent = `Received: ${getCurrentTime()}`;
                }
                if (leilaUrgentAlertContainer) {
                    leilaUrgentAlertContainer.className = 'alert-item urgent';
                }
                if (leilaActionedBtn) {
                     leilaActionedBtn.disabled = false;
                     console.log("Imran: Enabled Leila's Actioned button.");
                }

                if (leilaForecastChartArea) {
                    leilaForecastChartArea.innerHTML = `<strong style="color:red;">[Forecast Update: Significant increase expected. Antivirals +300%, Vaccines +250%, Masks +150%, Sanitizers +100%]</strong>`;
                }
            } else {
                 console.log("Imran: Confirm Dispatch button clicked, but conditions not met (Plan Approved:", planApproved, ")");
            }
        });
    } else { console.error("confirmDispatchBtn not found"); }

    // --- Leila's Actions ---
     if (leilaActionedBtn) {
        leilaActionedBtn.disabled = true; // Start disabled
        leilaActionedBtn.addEventListener('click', function() {
             console.log("Leila: Mark as Actioned button clicked. Checking conditions (shipmentDispatched:", shipmentDispatched, ", pharmacyPrepared:", pharmacyPrepared, ")");
            if (shipmentDispatched && !pharmacyPrepared) {
                pharmacyPrepared = true; // WORKFLOW STEP COMPLETE
                this.disabled = true;
                this.innerHTML = '<i class="fas fa-check-double"></i> Actioned & Ready';
                showConfirmation(leilaConfirmationMsg, 'Stock received and pharmacy prepared. Supplier notified.');
                addLogEntry(imranActivityLog, 'Leila (Pharmacist) confirmed pharmacy PREPARED for delivery.', 'fa-check-square', 'blue');

                console.log("Leila: Pharmacy Prepared. Calling updateFaisalDashboard() and updateSummaryViews().");
                // --- Update Faisal's Dashboard ---
                updateFaisalDashboard();
                // --- Update Summary Views (KPIs/Impact) ---
                updateSummaryViews(); // <-- UPDATE SUMMARY VIEWS

            } else {
                console.warn("Leila: Actioned button clicked, but conditions not met.");
                showFeedback(leilaConfirmationMsg, 'Cannot mark as actioned yet. Shipment may not be dispatched.', 'red');
            }
        });
    } else { console.error("leilaActionedBtn not found"); }


    // --- Faisal's Update Function (remains the same) ---
    function updateFaisalDashboard() {
        console.log("--- Executing updateFaisalDashboard ---"); // Log entry into the function
        addLogEntry(imranActivityLog, 'Faisal (Supplier) notified of increased demand signal.', 'fa-industry', 'purple');
        if (faisalDemandSignal) {
            faisalDemandSignal.innerHTML = '<strong><i class="fas fa-chart-line"></i> Signal:</strong> <span style="color:red;">URGENT - National Surge Projected!</span> Sustained high demand for flu medications projected nationally for the next 2 weeks based on Diviner aggregate forecast.';
            console.log("Updated faisalDemandSignal.");
        } else { console.error("faisalDemandSignal element not found!"); }

        if (faisalDemandChartArea) {
            // Inject SVG Line Chart for National Demand
            faisalDemandChartArea.className = 'chart-area line-chart'; // Add class
            // Dummy data points (week, demand index)
            const demandPoints = [
                { week: -4, value: 50 }, { week: -3, value: 55 }, { week: -2, value: 60 },
                { week: -1, value: 70 }, { week: 0, value: 85 }, // Current week
                { week: 1, value: 110 }, { week: 2, value: 130 } // Forecast
            ];
            const maxVal = 150; // Y-axis max
            const chartHeight = 150; // SVG height
            const chartWidth = 300; // SVG width
            const padding = 20;
            const totalWeeks = 6; // -4 to +2

            // Convert data points to SVG coordinates
            const demandPath = demandPoints.map(p =>
                `${padding + ((p.week + 4) / totalWeeks) * (chartWidth - 2 * padding)},${chartHeight - padding - (p.value / maxVal) * (chartHeight - 2 * padding)}`
            ).join(' L');

            faisalDemandChartArea.innerHTML = `
                <svg viewBox="0 0 ${chartWidth} ${chartHeight}" preserveAspectRatio="xMidYMid meet">
                    <text x="${chartWidth / 2}" y="12" class="chart-title">National Demand Trend (Index)</text>
                    <!-- Grid Lines (Optional) -->
                    <line x1="${padding}" y1="${chartHeight - padding}" x2="${chartWidth - padding}" y2="${chartHeight - padding}" class="axis-line" /> <!-- X Axis -->
                    <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${chartHeight - padding}" class="axis-line" /> <!-- Y Axis -->

                    <!-- Data Line -->
                    <path d="M${demandPath}" class="data-line" />

                    <!-- Labels -->
                    <text x="${padding - 5}" y="${padding + 5}" class="axis-label" text-anchor="end">${maxVal}</text>
                    <text x="${padding - 5}" y="${chartHeight - padding}" class="axis-label" text-anchor="end">0</text>
                    <text x="${padding}" y="${chartHeight - padding + 10}" class="axis-label">Wk -4</text>
                    <text x="${padding + (4 / totalWeeks) * (chartWidth - 2 * padding)}" y="${chartHeight - padding + 10}" class="axis-label" text-anchor="middle">Now</text>
                    <text x="${chartWidth - padding}" y="${chartHeight - padding + 10}" class="axis-label" text-anchor="end">Wk +2</text>
                </svg>
            `;
            console.log("Updated faisalDemandChartArea.");
        } else { console.error("faisalDemandChartArea element not found!"); }

        if (faisalProdRecommendation) {
            faisalProdRecommendation.innerHTML = '<strong><i class="fas fa-cogs"></i> AI Recommendation:</strong> <span style="color:red;">PRIORITIZE PRODUCTION RUNS</span> to meet projected national surge demand.';
            console.log("Updated faisalProdRecommendation.");
        } else { console.error("faisalProdRecommendation element not found!"); }

        if (faisalProdQueue) {
            faisalProdQueue.innerHTML = `
                <li class="priority-high"><strong>Flu Vaccine Batch #FV789 (URGENT)</strong></li>
                <li class="priority-high"><strong>Antiviral Batch #AV456 (URGENT)</strong></li>
                <li>Standard Antibiotic #AB123</li>
                <li>Pain Relief Med #PR789</li>
                <li>Routine Stock Replenishment</li>
            `;
            console.log("Updated faisalProdQueue.");
        } else { console.error("faisalProdQueue element not found!"); }
        console.log("--- Finished updateFaisalDashboard ---");
    }


    // --- Reem's Actions (remain the same) ---
    if (retrainModelBtn) {
        retrainModelBtn.addEventListener('click', function() {
            if (!modelRetrained) { // Allow retraining once per session for demo
                modelRetrained = true; // Simple flag for demo
                this.disabled = true;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Retraining...';
                console.log("Model retraining initiated.");

                // Simulate retraining delay
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-check"></i> Retrained';
                    if (lastRetrainingTime) {
                        lastRetrainingTime.innerHTML = `<i class="fas fa-history"></i> Last Retraining: <strong>Just Now</strong> (Incorporated Deira Surge outcome data).`;
                    }
                     if(retrainConfirmationMsg) showConfirmation(retrainConfirmationMsg, 'Model successfully retrained with latest data.');
                    // Re-enable after a longer delay if needed for demo
                    // setTimeout(() => { this.disabled = false; modelRetrained = false; this.innerHTML = '<i class="fas fa-save"></i> Apply Changes & Retrain'; }, 10000);
                }, 2000); // Simulate 2 seconds retraining time
            }
        });
    } else { console.error("retrainModelBtn not found"); }


    // --- Dr. Ayesha ---
    if (heatmapWhyBtn) {
        heatmapWhyBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable itself
            this.innerHTML = '<i class="fas fa-info-circle"></i> Explained';
            showFeedback(heatmapWhyFeedback, 'Heatmap reflects real-time GP reports, ER admissions, and social media velocity analysis for flu-like symptoms.', 'blue');
            console.log("Ayesha: Heatmap 'Why?' button clicked.");
        });
    }


    // --- Imran ---
    if (modifyDispatchBtn) { // Add specific feedback for Modify Route
        modifyDispatchBtn.addEventListener('click', function() {
            if (planApproved && !shipmentDispatched) { // Only if plan approved but not yet dispatched
                disableActionButtons(this); // Disable self and Confirm button
                if (confirmDispatchBtn) confirmDispatchBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-edit"></i> Modifying Route...';
                addLogEntry(imranActivityLog, 'Route modification requested (simulation).', 'fa-edit', 'orange');
                console.log("Imran: Modify Route button clicked.");
                // In real app, open route editor
            }
        });
    }
    if (imranViewStockDetailsBtn) {
        imranViewStockDetailsBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-list-alt"></i> Viewing...';
            showFeedback(imranStockFeedback, 'Displaying detailed stock report (simulation).', 'blue');
            console.log("Imran: View Stock Details button clicked.");
        });
    }
    if (imranAdjustThresholdsBtn) {
        imranAdjustThresholdsBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-sliders-h"></i> Adjusting...';
            showFeedback(imranStockFeedback, 'Opening threshold adjustment interface (simulation).', 'blue');
            console.log("Imran: Adjust Thresholds button clicked.");
        });
    }


    // --- Leila ---
    if (leilaRequestOrderBtn) {
        leilaRequestOrderBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-cart-plus"></i> Requested';
            showFeedback(leilaStockFeedback, 'Manual stock order request submitted (simulation).', 'orange');
            console.log("Leila: Request Manual Order button clicked.");
        });
    }
    if (leilaViewHistoryBtn) {
        leilaViewHistoryBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-history"></i> Viewing...';
            showFeedback(leilaStockFeedback, 'Displaying stock order history (simulation).', 'blue');
            console.log("Leila: View History button clicked.");
        });
    }
    if (leilaApplyPromoBtn) {
        leilaApplyPromoBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable this button and its Dismiss counterpart
            if(leilaDismissPromoBtn) leilaDismissPromoBtn.disabled = true;
            this.innerHTML = '<i class="fas fa-check"></i> Applied';
            showFeedback(leilaRecFeedback, 'Promotion suggestion applied.', 'green');
            console.log("Leila: Apply Promo button clicked.");
        });
    }
     if (leilaDismissPromoBtn) {
        leilaDismissPromoBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable this button and its Apply counterpart
             if(leilaApplyPromoBtn) leilaApplyPromoBtn.disabled = true;
            this.innerHTML = '<i class="fas fa-times"></i> Dismissed';
            showFeedback(leilaRecFeedback, 'Promotion suggestion dismissed.', 'grey');
            console.log("Leila: Dismiss Promo button clicked.");
        });
    }
     if (leilaApplyPlacementBtn) {
        leilaApplyPlacementBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable this button and its Dismiss counterpart
            if(leilaDismissPlacementBtn) leilaDismissPlacementBtn.disabled = true;
            this.innerHTML = '<i class="fas fa-check"></i> Applied';
            showFeedback(leilaRecFeedback, 'Placement suggestion applied.', 'green');
            console.log("Leila: Apply Placement button clicked.");
        });
    }
     if (leilaDismissPlacementBtn) {
        leilaDismissPlacementBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable this button and its Apply counterpart
             if(leilaApplyPlacementBtn) leilaApplyPlacementBtn.disabled = true;
            this.innerHTML = '<i class="fas fa-times"></i> Dismissed';
            showFeedback(leilaRecFeedback, 'Placement suggestion dismissed.', 'grey');
            console.log("Leila: Dismiss Placement button clicked.");
        });
    }


    // --- Faisal ---
    if (faisalAutoAdjustToggle) {
        faisalAutoAdjustToggle.addEventListener('click', function() {
            faisalAutoAdjustEnabled = !faisalAutoAdjustEnabled; // Toggle state
            if (faisalAutoAdjustEnabled) {
                this.innerHTML = '<i class="fas fa-robot"></i> Auto-adjust: ON';
                this.classList.add('active-toggle'); // Optional: Add class for styling
                showFeedback(faisalProdFeedback, 'AI auto-adjustment enabled for production lines.', 'green');
                addLogEntry(imranActivityLog, 'Faisal enabled Production Auto-Adjust.', 'fa-robot', 'blue');
            } else {
                this.innerHTML = '<i class="fas fa-robot"></i> Auto-adjust: OFF';
                this.classList.remove('active-toggle'); // Optional: Remove class
                showFeedback(faisalProdFeedback, 'AI auto-adjustment disabled.', 'grey');
                 addLogEntry(imranActivityLog, 'Faisal disabled Production Auto-Adjust.', 'fa-robot', 'grey');
            }
            console.log("Faisal: Auto-adjust toggled to:", faisalAutoAdjustEnabled);
        });
    }
    if (faisalViewProdDetailsBtn) {
        faisalViewProdDetailsBtn.addEventListener('click', function() {
            // Don't disable toggle button
            this.disabled = true;
            if(faisalManualOverrideBtn) faisalManualOverrideBtn.disabled = true;
            this.innerHTML = '<i class="fas fa-list-alt"></i> Viewing...';
            showFeedback(faisalProdFeedback, 'Displaying detailed production line status (simulation).', 'blue');
            console.log("Faisal: View Production Details button clicked.");
        });
    }
    if (faisalManualOverrideBtn) {
        faisalManualOverrideBtn.addEventListener('click', function() {
             // Don't disable toggle button
            this.disabled = true;
             if(faisalViewProdDetailsBtn) faisalViewProdDetailsBtn.disabled = true;
            this.innerHTML = '<i class="fas fa-user-cog"></i> Overriding...';
            showFeedback(faisalProdFeedback, 'Manual production override initiated (simulation).', 'orange');
            addLogEntry(imranActivityLog, 'Faisal initiated Manual Production Override.', 'fa-user-cog', 'orange');
            console.log("Faisal: Manual Override button clicked.");
        });
    }
    if (faisalViewSuppliersBtn) {
        faisalViewSuppliersBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-users"></i> Viewing...';
            showFeedback(faisalMaterialFeedback, 'Displaying raw material supplier list (simulation).', 'blue');
            console.log("Faisal: View Suppliers button clicked.");
        });
    }
    if (faisalPlaceMaterialOrderBtn) {
        faisalPlaceMaterialOrderBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Ordering...';
            showFeedback(faisalMaterialFeedback, 'Placing raw material order (simulation).', 'green');
            addLogEntry(imranActivityLog, 'Faisal placed raw material order.', 'fa-shopping-cart', 'blue');
            console.log("Faisal: Place Material Order button clicked.");
        });
    }


    // --- Reem ---
    if (reemRunSimulationBtn) {
        reemRunSimulationBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running...';
            showFeedback(reemSimFeedback, 'Running outbreak response simulation...', 'blue');
            console.log("Reem: Run Simulation button clicked.");
            // Simulate completion
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-play"></i> Run Simulation';
                 showFeedback(reemSimFeedback, 'Simulation complete. Results available.', 'green');
                 this.disabled = false;
                 if(reemCompareModelsBtn) reemCompareModelsBtn.disabled = false;
            }, 2500);
        });
    }
    if (reemCompareModelsBtn) {
        reemCompareModelsBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-exchange-alt"></i> Comparing...';
            showFeedback(reemSimFeedback, 'Comparing model performance metrics (simulation).', 'blue');
            console.log("Reem: Compare Models button clicked.");
        });
    }
     if (reemDeployUpdateBtn) {
        reemDeployUpdateBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Deploying...';
            showFeedback(reemDeployFeedback, 'Deploying model update to production...', 'blue');
            console.log("Reem: Deploy Update button clicked.");
             // Simulate completion
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Deploy Update';
                 showFeedback(reemDeployFeedback, 'Model update deployed successfully.', 'green');
                 this.disabled = false;
                 if(reemRollbackBtn) reemRollbackBtn.disabled = false;
            }, 2000);
        });
    }
     if (reemRollbackBtn) {
        reemRollbackBtn.addEventListener('click', function() {
            disableActionButtons(this); // Disable buttons in this group
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Rolling Back...';
            showFeedback(reemDeployFeedback, 'Rolling back to previous model version...', 'orange');
            console.log("Reem: Rollback button clicked.");
             // Simulate completion
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-undo"></i> Rollback';
                 showFeedback(reemDeployFeedback, 'Rollback complete. Previous model active.', 'red');
                 this.disabled = false;
                 if(reemDeployUpdateBtn) reemDeployUpdateBtn.disabled = false;
            }, 1500);
        });
    }


    // --- NEW: Summary View Update Function ---
    function updateSummaryViews() {
        console.log("--- Executing updateSummaryViews ---");
        const workflowComplete = pharmacyPrepared; // Use this state variable

        // Update KPIs
        if (kpiShortages) kpiShortages.textContent = workflowComplete ? '98%' : '95%'; // Slightly improve on completion
        if (kpiResponseTime) kpiResponseTime.textContent = '3x Faster'; // Static example
        if (kpiWastage) kpiWastage.textContent = workflowComplete ? '60%' : '55%'; // Slightly improve on completion
        if (kpiEfficiency) {
            kpiEfficiency.textContent = workflowComplete ? 'High' : 'Medium';
            kpiEfficiency.style.color = workflowComplete ? 'green' : 'orange';
        }

        // Update Impact Charts (Simulated)
        if (impactChartCost) {
            impactChartCost.innerHTML = `
                <div style="font-size: 0.9em; text-align: left;">
                    <p><strong>Baseline Costs:</strong></p>
                    <div style="width: 100%; background-color: #ddd; height: 20px; border-radius: 5px; margin-bottom: 5px;"><div style="width: 80%; background-color: #dc3545; height: 100%; border-radius: 5px;"></div></div>
                    <p><strong>Diviner Optimized Costs:</strong></p>
                    <div style="width: 100%; background-color: #ddd; height: 20px; border-radius: 5px;"><div style="width: ${workflowComplete ? '50%' : '55%'}; background-color: #28a745; height: 100%; border-radius: 5px;"></div></div>
                    <small>(Simulated reduction in emergency response, wastage, hospitalization)</small>
                </div>`;
        }
        if (impactChartLives) {
             impactChartLives.innerHTML = `
                 <div style="font-size: 0.9em; text-align: left;">
                    <p><i class="fas fa-check-circle" style="color: green;"></i> Faster medication access during surge: <strong>${workflowComplete ? 'Achieved' : 'In Progress'}</strong></p>
                    <p><i class="fas fa-check-circle" style="color: green;"></i> Reduced outbreak severity potential: <strong>${workflowComplete ? 'Improved' : 'Projected'}</strong></p>
                    <p><i class="fas fa-check-circle" style="color: green;"></i> Enhanced community health resilience: <strong>${workflowComplete ? 'Strengthened' : 'Targeted'}</strong></p>
                    <p style="margin-top: 10px;"><i class="fas fa-users" style="color:#4a90e2;"></i> Focus: Ensuring vulnerable populations receive timely care.</p>
                 </div>`;
        }
        if (impactChartSustainability) {
            impactChartSustainability.innerHTML = `
                 <div style="font-size: 0.9em; text-align: left;">
                    <p><strong>Carbon Footprint (Logistics):</strong></p>
                    <div style="height: 60px; border: 1px solid #ccc; padding: 5px; position: relative;">
                        <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
                          <polyline points="0,40 20,35 40,30 60,${workflowComplete ? 20 : 25} 80,${workflowComplete ? 15 : 20} 100,${workflowComplete ? 10 : 18}" fill="none" stroke="#dc3545" stroke-width="1" />
                          <polyline points="0,40 20,35 40,30 60,${workflowComplete ? 20 : 25} 80,${workflowComplete ? 15 : 20} 100,${workflowComplete ? 10 : 18}" fill="none" stroke="#28a745" stroke-width="2" />
                          <text x="5" y="10" font-size="5">Baseline</text>
                          <text x="70" y="${workflowComplete ? 5 : 13}" font-size="5" fill="#28a745">Optimized</text>
                        </svg>
                    </div>
                    <small>(Simulated reduction via optimized routes & less wastage)</small>
                 </div>`;
        }
        console.log("--- Finished updateSummaryViews ---");
    }


    // --- Initial Setup ---
    console.log("--- Initial Setup ---");
    processDataForDashboard();
    updateAyeshaForecastChart();
    updateLeilaDashboard(); // Make sure this is called
    updateFaisalDashboard();
    updateReemDashboard();
    updateSummaryViews();
    switchView(roleSelect.value);
    updateButtonStates();

    console.log("Initial button states set.");
    console.log("---------------------");

    // --- Modal Close Logic --- (Ensure this is INSIDE the DOMContentLoaded listener)
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', function() {
            if (planModal) {
                planModal.style.display = 'none';
                console.log("Modal closed via button."); // Add log
            }
        });
    } else {
        console.error("Modal close button not found!");
    }

    // Close modal if user clicks outside the modal content
    window.addEventListener('click', function(event) {
        if (planModal && event.target == planModal) { // Check if the click was directly on the modal backdrop
            planModal.style.display = 'none';
            console.log("Modal closed via backdrop click."); // Add log
        }
    });

    // --- Leila's Update Function ---
    function updateLeilaDashboard() {
        console.log("--- Executing updateLeilaDashboard ---");
        
        // Keep the alert logic as is...
        
        // Update Stock Table as is...
        
        // MODIFIED FORECAST CHART LOGIC - ALWAYS SHOW THE CHART REGARDLESS OF ALERT STATE
        if (leilaForecastChartArea) {
            console.log("Found leilaForecastChartArea element with ID:", leilaForecastChartArea.id);
            
            // Always show the bar chart for testing (removing conditional logic)
            leilaForecastChartArea.className = 'chart-area bar-chart'; // Add class for styling
            
            // Dummy data with exact percentages from placeholder
            const forecastData = [
                { item: 'Antivirals', increase: 300 },
                { item: 'Vaccines', increase: 250 },
                { item: 'Masks', increase: 150 },
                { item: 'Sanitizers', increase: 100 }
            ];
            const maxIncrease = 350; // Max value for scaling bars
            
            // Generate HTML for bars
            const barsHtml = forecastData.map(d => {
                const barHeight = (d.increase / maxIncrease) * 110; // Scale height (max 110px)
                return `<div class="bar" style="height: ${barHeight}px; background-color: #f0ad4e;" title="+${d.increase}% Demand Increase">
                            <span class="value" style="position: absolute; top: -18px; left: 50%; transform: translateX(-50%); font-size: 0.7em; font-weight: bold;">+${d.increase}%</span>
                            <span style="position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); font-size: 0.7em;">${d.item}</span>
                        </div>`;
            }).join('');
            
            leilaForecastChartArea.innerHTML = barsHtml;
            console.log("Leila's forecast chart HTML generated:", barsHtml.substring(0, 100) + "...");
        } else {
            console.error("leilaForecastChartArea element NOT found! Check your HTML selectors.");
        }
        
        console.log("--- Finished updateLeilaDashboard ---");
    }

    // --- Reem's Update Function ---
    // ... (Keep existing Reem update function) ...

    // Function to add enhanced KPI displays with dummy data
    function enhanceKpiDisplays() {
        console.log("Enhancing KPI displays with visual elements and detailed data");
        
        // 1. Shortages Prevented
        if (kpiShortages) {
            const shortagesContainer = kpiShortages.parentElement;
            shortagesContainer.innerHTML = `
                <h4>Shortages Prevented:</h4>
                <div class="kpi-visual">
                    <div class="kpi-donut" style="--percentage: 98; --color: #28a745;">
                        <span class="kpi-value">98%</span>
                    </div>
                    <div class="kpi-details">
                        <p><i class="fas fa-check-circle" style="color: green;"></i> Antivirals: 98%</p>
                        <p><i class="fas fa-check-circle" style="color: green;"></i> Vaccines: 97%</p>
                        <p><i class="fas fa-check-circle" style="color: green;"></i> Masks: 100%</p>
                        <p><i class="fas fa-info-circle" style="color: blue;"></i> Baseline: 75%</p>
                    </div>
                </div>
            `;
        }
        
        // 2. Response Time Improvement
        if (kpiResponseTime) {
            const responseContainer = kpiResponseTime.parentElement;
            responseContainer.innerHTML = `
                <h4>Response Time Improvement:</h4>
                <div class="kpi-visual">
                    <div class="kpi-bar-comparison">
                        <div class="kpi-bar-label">Before</div>
                        <div class="kpi-bar" style="--width: 100%; --color: #dc3545;">
                            <span>72h</span>
                        </div>
                        <div class="kpi-bar-label">After</div>
                        <div class="kpi-bar" style="--width: 33%; --color: #28a745;">
                            <span>24h</span>
                        </div>
                    </div>
                    <div class="kpi-details">
                        <p><strong>3x Faster</strong> overall response</p>
                        <p><i class="fas fa-bolt" style="color: orange;"></i> <strong>5x</strong> faster surge detection</p>
                        <p><i class="fas fa-truck" style="color: blue;"></i> <strong>2.5x</strong> faster logistics</p>
                    </div>
                </div>
            `;
        }
        
        // 3. Stock Wastage Reduction
        if (kpiWastage) {
            const wastageContainer = kpiWastage.parentElement;
            wastageContainer.innerHTML = `
                <h4>Stock Wastage Reduction:</h4>
                <div class="kpi-visual">
                    <div class="kpi-progress">
                        <div class="kpi-progress-bar" style="width: 60%;">60%</div>
                    </div>
                    <div class="kpi-details">
                        <p><i class="fas fa-check-circle" style="color: green;"></i> <strong>60%</strong> reduction in expired medications</p>
                        <p><i class="fas fa-check-circle" style="color: green;"></i> <strong>45%</strong> reduction in overstocking</p>
                        <p><i class="fas fa-check-circle" style="color: green;"></i> <strong>55%</strong> reduction in emergency orders</p>
                        <p><i class="fas fa-money-bill-wave" style="color: green;"></i> Est. savings: <strong>₹4.2M</strong> annually</p>
                    </div>
                </div>
            `;
        }
        
        // 4. Cross-Functional Efficiency
        if (kpiEfficiency) {
            const efficiencyContainer = kpiEfficiency.parentElement;
            efficiencyContainer.innerHTML = `
                <h4>Cross-Functional Efficiency:</h4>
                <div class="kpi-visual">
                    <div class="kpi-rating">
                        <span class="kpi-star filled"><i class="fas fa-star"></i></span>
                        <span class="kpi-star filled"><i class="fas fa-star"></i></span>
                        <span class="kpi-star filled"><i class="fas fa-star"></i></span>
                        <span class="kpi-star filled"><i class="fas fa-star"></i></span>
                        <span class="kpi-star half-filled"><i class="fas fa-star-half-alt"></i></span>
                        <span class="kpi-rating-text">High (4.5/5)</span>
                    </div>
                    <div class="kpi-details">
                        <p><i class="fas fa-users" style="color: blue;"></i> <strong>90%</strong> team coordination</p>
                        <p><i class="fas fa-comment-dots" style="color: green;"></i> <strong>85%</strong> communication efficiency</p>
                        <p><i class="fas fa-tasks" style="color: purple;"></i> <strong>95%</strong> decision implementation</p>
                        <p><i class="fas fa-tachometer-alt" style="color: orange;"></i> <strong>87%</strong> process optimization</p>
                    </div>
                </div>
            `;
        }
    }

    // Add CSS for KPI visualizations
    const kpiStyles = document.createElement('style');
    kpiStyles.textContent = `
        .kpi-visual {
            display: flex;
            flex-direction: column;
            margin-top: 10px;
        }
        
        .kpi-details {
            font-size: 0.85em;
            margin-top: 10px;
        }
        
        .kpi-details p {
            margin: 5px 0;
        }
        
        /* Donut chart */
        .kpi-donut {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto;
            background: conic-gradient(var(--color) 0% calc(var(--percentage) * 1%), #e9ecef calc(var(--percentage) * 1%) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        
        .kpi-donut::before {
            content: "";
            position: absolute;
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 50%;
        }
        
        .kpi-value {
            position: relative;
            font-weight: bold;
            font-size: 1.2em;
            color: var(--color);
        }
        
        /* Bar comparison */
        .kpi-bar-comparison {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 5px;
            align-items: center;
        }
        
        .kpi-bar {
            height: 25px;
            background-color: var(--color);
            width: var(--width);
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 10px;
            color: white;
            font-weight: bold;
            border-radius: 3px;
        }
        
        .kpi-bar-label {
            font-size: 0.85em;
            color: #666;
        }
        
        /* Progress bar */
        .kpi-progress {
            width: 100%;
            height: 25px;
            background-color: #e9ecef;
            border-radius: 3px;
            overflow: hidden;
        }
        
        .kpi-progress-bar {
            height: 100%;
            background-color: #28a745;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        /* Star rating */
        .kpi-rating {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 5px;
        }
        
        .kpi-star {
            color: #e0e0e0;
            font-size: 1.5em;
        }
        
        .kpi-star.filled {
            color: #ffc107;
        }
        
        .kpi-star.half-filled {
            color: #ffc107;
        }
        
        .kpi-rating-text {
            margin-left: 10px;
            font-weight: bold;
            color: #28a745;
        }
    `;
    document.head.appendChild(kpiStyles);

    // Call this function after updateSummaryViews
    setTimeout(function() {
        enhanceKpiDisplays();
    }, 2500);

    // Direct approach to update KPI displays without relying on existing variables
    function enhanceKpiDisplaysDirectly() {
        console.log("Attempting direct KPI enhancement...");
        
        // Find KPI cards directly in the DOM by looking for their headers/labels
        const kpiElements = document.querySelectorAll('#view-reem .system-loop-card p');
        
        for (const element of kpiElements) {
            // Check which KPI this is by examining the text content
            const text = element.textContent;
            
            if (text.includes("Shortages Prevented")) {
                console.log("Found Shortages Prevented KPI");
                element.innerHTML = `
                    <h4>Shortages Prevented:</h4>
                    <div class="kpi-visual">
                        <div class="kpi-donut" style="--percentage: 98; --color: #28a745;">
                            <span class="kpi-value">98%</span>
                        </div>
                        <div class="kpi-details">
                            <p><i class="fas fa-check-circle" style="color: green;"></i> Antivirals: 98%</p>
                            <p><i class="fas fa-check-circle" style="color: green;"></i> Vaccines: 97%</p>
                            <p><i class="fas fa-check-circle" style="color: green;"></i> Masks: 100%</p>
                            <p><i class="fas fa-info-circle" style="color: blue;"></i> Baseline: 75%</p>
                        </div>
                    </div>
                `;
            } 
            else if (text.includes("Response Time Improvement")) {
                console.log("Found Response Time KPI");
                element.innerHTML = `
                    <h4>Response Time Improvement:</h4>
                    <div class="kpi-visual">
                        <div class="kpi-bar-comparison">
                            <div class="kpi-bar-label">Before</div>
                            <div class="kpi-bar" style="--width: 100%; --color: #dc3545;">
                                <span>72h</span>
                            </div>
                            <div class="kpi-bar-label">After</div>
                            <div class="kpi-bar" style="--width: 33%; --color: #28a745;">
                                <span>24h</span>
                            </div>
                        </div>
                        <div class="kpi-details">
                            <p><strong>3x Faster</strong> overall response</p>
                            <p><i class="fas fa-bolt" style="color: orange;"></i> <strong>5x</strong> faster surge detection</p>
                            <p><i class="fas fa-truck" style="color: blue;"></i> <strong>2.5x</strong> faster logistics</p>
                        </div>
                    </div>
                `;
            } 
            else if (text.includes("Stock Wastage Reduction")) {
                console.log("Found Stock Wastage KPI");
                element.innerHTML = `
                    <h4>Stock Wastage Reduction:</h4>
                    <div class="kpi-visual">
                        <div class="kpi-progress">
                            <div class="kpi-progress-bar" style="width: 60%;">60%</div>
                        </div>
                        <div class="kpi-details">
                            <p><i class="fas fa-check-circle" style="color: green;"></i> <strong>60%</strong> reduction in expired medications</p>
                            <p><i class="fas fa-check-circle" style="color: green;"></i> <strong>45%</strong> reduction in overstocking</p>
                            <p><i class="fas fa-check-circle" style="color: green;"></i> <strong>55%</strong> reduction in emergency orders</p>
                            <p><i class="fas fa-money-bill-wave" style="color: green;"></i> Est. savings: <strong>₹4.2M</strong> annually</p>
                        </div>
                    </div>
                `;
            } 
            else if (text.includes("Cross-Functional Efficiency")) {
                console.log("Found Cross-Functional Efficiency KPI");
                element.innerHTML = `
                    <h4>Cross-Functional Efficiency:</h4>
                    <div class="kpi-visual">
                        <div class="kpi-rating">
                            <span class="kpi-star filled"><i class="fas fa-star"></i></span>
                            <span class="kpi-star filled"><i class="fas fa-star"></i></span>
                            <span class="kpi-star filled"><i class="fas fa-star"></i></span>
                            <span class="kpi-star filled"><i class="fas fa-star"></i></span>
                            <span class="kpi-star half-filled"><i class="fas fa-star-half-alt"></i></span>
                            <span class="kpi-rating-text">High (4.5/5)</span>
                        </div>
                        <div class="kpi-details">
                            <p><i class="fas fa-users" style="color: blue;"></i> <strong>90%</strong> team coordination</p>
                            <p><i class="fas fa-comment-dots" style="color: green;"></i> <strong>85%</strong> communication efficiency</p>
                            <p><i class="fas fa-tasks" style="color: purple;"></i> <strong>95%</strong> decision implementation</p>
                            <p><i class="fas fa-tachometer-alt" style="color: orange;"></i> <strong>87%</strong> process optimization</p>
                        </div>
                    </div>
                `;
            }
        }
    }

    // Run this function after a delay to ensure the page is loaded
    setTimeout(function() {
        console.log("Running direct KPI enhancement");
        enhanceKpiDisplaysDirectly();
    }, 3000);

    // More aggressive approach to update KPI values
    function fixKpiValues() {
        console.log("EMERGENCY KPI FIX: Attempting to update KPI values directly");
        
        // Try multiple selectors to find the KPI elements
        const selectors = [
            '#view-reem .system-loop-card p',
            '#view-reem .card-body p',
            '#view-reem span[id*="kpi"]',
            '#view-reem p:contains("Shortages Prevented")',
            '#view-reem .card *'
        ];
        
        // Direct approach - find elements containing specific text
        const allElements = document.querySelectorAll('#view-reem *');
        console.log(`Found ${allElements.length} elements in Reem's view to scan`);
        
        // Look for elements containing KPI text
        for (const element of allElements) {
            // Only check elements that could contain text
            if (element.nodeType === 1 && element.textContent) {
                const text = element.textContent.trim();
                
                // Check for "--%" pattern which indicates an empty KPI value
                if (text === "--%") {
                    console.log("Found empty KPI value:", element);
                    // Get the parent element to find the label
                    const parentText = element.parentElement ? element.parentElement.textContent : "";
                    console.log("Parent text:", parentText);
                    
                    // Update based on parent text
                    if (parentText.includes("Shortages")) {
                        element.textContent = "98%";
                        element.style.color = "#28a745"; // green
                    } else if (parentText.includes("Response")) {
                        element.textContent = "3x Faster";
                        element.style.color = "#28a745";
                    } else if (parentText.includes("Wastage")) {
                        element.textContent = "60%";
                        element.style.color = "#28a745";
                    } else if (parentText.includes("Efficiency")) {
                        element.textContent = "High";
                        element.style.color = "#28a745";
                    }
                }
                
                // Also look for KPI labels to update entire sections
                if (/Shortages Prevented:?/.test(text)) {
                    console.log("Found Shortages Prevented label:", element);
                    const valueEl = findNextSibling(element, "span") || findNextSibling(element, "div");
                    if (valueEl) {
                        valueEl.textContent = "98%";
                        valueEl.style.color = "#28a745";
                    }
                } else if (/Response Time Improvement:?/.test(text)) {
                    console.log("Found Response Time label:", element);
                    const valueEl = findNextSibling(element, "span") || findNextSibling(element, "div");
                    if (valueEl) {
                        valueEl.textContent = "3x Faster";
                        valueEl.style.color = "#28a745";
                    }
                } else if (/Stock Wastage Reduction:?/.test(text)) {
                    console.log("Found Wastage label:", element);
                    const valueEl = findNextSibling(element, "span") || findNextSibling(element, "div");
                    if (valueEl) {
                        valueEl.textContent = "60%";
                        valueEl.style.color = "#28a745";
                    }
                } else if (/Cross-Functional Efficiency:?/.test(text)) {
                    console.log("Found Efficiency label:", element);
                    const valueEl = findNextSibling(element, "span") || findNextSibling(element, "div");
                    if (valueEl) {
                        valueEl.textContent = "High";
                        valueEl.style.color = "#28a745";
                    }
                }
            }
        }
        
        // Helper function to find next sibling of specified type
        function findNextSibling(element, tagName) {
            let sibling = element.nextElementSibling;
            while (sibling) {
                if (sibling.tagName.toLowerCase() === tagName.toLowerCase()) {
                    return sibling;
                }
                sibling = sibling.nextElementSibling;
            }
            return null;
        }
        
        // Also try updating using any global variables that might exist
        try {
            if (window.kpiShortages) window.kpiShortages.textContent = "98%";
            if (window.kpiResponseTime) window.kpiResponseTime.textContent = "3x Faster";
            if (window.kpiWastage) window.kpiWastage.textContent = "60%";
            if (window.kpiEfficiency) window.kpiEfficiency.textContent = "High";
        } catch (e) {
            console.error("Error updating global KPI variables:", e);
        }
    }

    // Run after a longer delay and repeat attempts
    setTimeout(function() {
        console.log("First KPI fix attempt");
        fixKpiValues();
        
        // Make multiple attempts in case the first one is too early
        setTimeout(fixKpiValues, 1000);
        setTimeout(fixKpiValues, 3000);
    }, 2000);

    // Super direct approach - just put the values in
    function setKpiValues() {
        console.log("BRUTE FORCE: Setting KPI values directly");
        
        // Get all elements in the page
        const elements = document.querySelectorAll('body *');
        
        // Replace any placeholder or empty values
        for (const el of elements) {
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
                const text = el.textContent.trim();
                
                // Replace any empty values or placeholder text
                if (text === "--%") {
                    console.log("Found empty KPI value, replacing:", el);
                    el.textContent = "95%";
                    el.style.color = "#28a745";
                }
                
                // Look for specific KPI text nodes to replace
                if (text.includes("Shortages Prevented")) {
                    const span = document.createElement('span');
                    span.innerHTML = "Shortages Prevented: <b style='color:#28a745'>98%</b>";
                    el.replaceWith(span);
                }
                else if (text.includes("Response Time Improvement")) {
                    const span = document.createElement('span');
                    span.innerHTML = "Response Time Improvement: <b style='color:#28a745'>3x Faster</b>";
                    el.replaceWith(span);
                }
                else if (text.includes("Stock Wastage Reduction")) {
                    const span = document.createElement('span');
                    span.innerHTML = "Stock Wastage Reduction: <b style='color:#28a745'>60%</b>";
                    el.replaceWith(span);
                }
                else if (text.includes("Cross-Functional Efficiency")) {
                    const span = document.createElement('span');
                    span.innerHTML = "Cross-Functional Efficiency: <b style='color:#28a745'>High</b>";
                    el.replaceWith(span);
                }
            }
        }
        
        // Manually insert values if we still can't find them
        const systemLoopCard = document.querySelector('#view-reem .card.system-loop-card');
        if (systemLoopCard) {
            const kpis = systemLoopCard.querySelectorAll('.card-body p');
            kpis.forEach(kpi => {
                const text = kpi.textContent;
                if (text.includes("Shortages Prevented")) {
                    kpi.innerHTML = "Shortages Prevented: <b style='color:#28a745'>98%</b>";
                }
                else if (text.includes("Response Time Improvement")) {
                    kpi.innerHTML = "Response Time Improvement: <b style='color:#28a745'>3x Faster</b>";
                }
                else if (text.includes("Stock Wastage Reduction")) {
                    kpi.innerHTML = "Stock Wastage Reduction: <b style='color:#28a745'>60%</b>";
                }
                else if (text.includes("Cross-Functional Efficiency")) {
                    kpi.innerHTML = "Cross-Functional Efficiency: <b style='color:#28a745'>High</b>";
                }
            });
        }
        
        // Last resort - create and inject our own KPIs if we can find the container
        const reemView = document.querySelector('#view-reem');
        if (reemView) {
            // Find any card titled "System Loop & Key Performance Indicators"
            const cards = reemView.querySelectorAll('.card');
            for (const card of cards) {
                if (card.textContent.includes("System Loop") || card.textContent.includes("Key Performance")) {
                    console.log("Found the System Loop card, replacing content");
                    const cardBody = card.querySelector('.card-body');
                    if (cardBody) {
                        cardBody.innerHTML = `
                            <h4>System Loop & Key Performance Indicators</h4>
                            <p>Shortages Prevented: <b style='color:#28a745'>98%</b></p>
                            <p>Response Time Improvement: <b style='color:#28a745'>3x Faster</b></p>
                            <p>Stock Wastage Reduction: <b style='color:#28a745'>60%</b></p>
                            <p>Cross-Functional Efficiency: <b style='color:#28a745'>High</b></p>
                        `;
                    }
                }
            }
        }
    }
    
    // Run multiple times to catch whenever the elements appear
    setTimeout(setKpiValues, 500);
    setTimeout(setKpiValues, 1500);
    setTimeout(setKpiValues, 3000);
    
    // Also run when user switches to Reem's view
    document.addEventListener('click', function(e) {
        if (e.target && e.target.matches('.nav-link') && e.target.textContent.includes('Reem')) {
            console.log("User clicked Reem's tab - setting KPI values");
            setTimeout(setKpiValues, 100);
            setTimeout(setKpiValues, 500);
        }
    });

    // Function to create ICU forecast line chart for Dr. Ayesha
    function createAyeshaICUForecastChart() {
        console.log("Creating ICU forecast chart for Dr. Ayesha");
        
        // Find the chart area in Dr. Ayesha's forecast card
        const chartArea = document.querySelector('#view-ayesha .forecast-card .chart-area');
        if (!chartArea) {
            console.error("Could not find chart area in Dr. Ayesha's forecast card");
            return;
        }
        
        // Clear any existing content
        chartArea.innerHTML = '';
        
        // Create SVG element
        const svgNS = "http://www.w3.org/2000/svg";
        const width = 330;
        const height = 150;
        const padding = 30;
        
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
        svg.style.backgroundColor = "#f8f9fa";
        svg.style.border = "1px solid #dee2e6";
        
        // Data for the chart (7 days forecast)
        const days = ["Today", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"];
        const icuDemand = [85, 92, 109, 126, 138, 145, 149]; // Increasing demand
        const icuCapacity = 120; // Constant capacity line
        
        // Calculate scales
        const xScale = (width - 2 * padding) / (days.length - 1);
        const yMax = Math.max(...icuDemand, icuCapacity) * 1.1; // 10% higher than max value
        const yScale = (height - 2 * padding) / yMax;
        
        // Draw grid lines
        for (let i = 0; i <= 5; i++) {
            const y = height - padding - (i * (height - 2 * padding) / 5);
            const gridLine = document.createElementNS(svgNS, "line");
            gridLine.setAttribute("x1", padding);
            gridLine.setAttribute("y1", y);
            gridLine.setAttribute("x2", width - padding);
            gridLine.setAttribute("y2", y);
            gridLine.setAttribute("stroke", "#e0e0e0");
            gridLine.setAttribute("stroke-dasharray", "2,2");
            svg.appendChild(gridLine);
            
            // Add Y-axis labels
            const yLabel = document.createElementNS(svgNS, "text");
            yLabel.setAttribute("x", padding - 5);
            yLabel.setAttribute("y", y + 4);
            yLabel.setAttribute("text-anchor", "end");
            yLabel.setAttribute("font-size", "8");
            yLabel.setAttribute("fill", "#666");
            yLabel.textContent = Math.round(i * yMax / 5);
            svg.appendChild(yLabel);
        }
        
        // Create capacity line (horizontal line)
        const capacityY = height - padding - (icuCapacity * yScale);
        const capacityLine = document.createElementNS(svgNS, "line");
        capacityLine.setAttribute("x1", padding);
        capacityLine.setAttribute("y1", capacityY);
        capacityLine.setAttribute("x2", width - padding);
        capacityLine.setAttribute("y2", capacityY);
        capacityLine.setAttribute("stroke", "#dc3545"); // Red line for capacity
        capacityLine.setAttribute("stroke-width", "2");
        capacityLine.setAttribute("stroke-dasharray", "5,3");
        svg.appendChild(capacityLine);
        
        // Add capacity label
        const capacityLabel = document.createElementNS(svgNS, "text");
        capacityLabel.setAttribute("x", width - padding + 5);
        capacityLabel.setAttribute("y", capacityY + 3);
        capacityLabel.setAttribute("font-size", "8");
        capacityLabel.setAttribute("fill", "#dc3545");
        capacityLabel.setAttribute("text-anchor", "start");
        capacityLabel.textContent = "Capacity";
        svg.appendChild(capacityLabel);
        
        // Create the demand line
        let pathData = "";
        const points = [];
        
        for (let i = 0; i < days.length; i++) {
            const x = padding + i * xScale;
            const y = height - padding - (icuDemand[i] * yScale);
            points.push({ x, y });
            
            if (i === 0) {
                pathData += `M${x},${y}`;
            } else {
                pathData += ` L${x},${y}`;
            }
            
            // Add X-axis labels (days)
            const dayLabel = document.createElementNS(svgNS, "text");
            dayLabel.setAttribute("x", x);
            dayLabel.setAttribute("y", height - padding + 15);
            dayLabel.setAttribute("text-anchor", "middle");
            dayLabel.setAttribute("font-size", "8");
            dayLabel.setAttribute("fill", "#666");
            dayLabel.textContent = days[i];
            svg.appendChild(dayLabel);
        }
        
        // Add the line path
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", pathData);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#007bff"); // Blue line for demand
        path.setAttribute("stroke-width", "2");
        svg.appendChild(path);
        
        // Add data points
        for (let i = 0; i < points.length; i++) {
            const circle = document.createElementNS(svgNS, "circle");
            circle.setAttribute("cx", points[i].x);
            circle.setAttribute("cy", points[i].y);
            circle.setAttribute("r", "3");
            
            // Highlight the point where demand exceeds capacity
            if (icuDemand[i] > icuCapacity) {
                circle.setAttribute("fill", "#dc3545"); // Red fill
                circle.setAttribute("stroke", "#dc3545");
            } else {
                circle.setAttribute("fill", "#007bff"); // Blue fill
                circle.setAttribute("stroke", "#007bff");
            }
            
            svg.appendChild(circle);
            
            // Add data point values
            const valueLabel = document.createElementNS(svgNS, "text");
            valueLabel.setAttribute("x", points[i].x);
            valueLabel.setAttribute("y", points[i].y - 8);
            valueLabel.setAttribute("text-anchor", "middle");
            valueLabel.setAttribute("font-size", "8");
            valueLabel.setAttribute("font-weight", "bold");
            
            if (icuDemand[i] > icuCapacity) {
                valueLabel.setAttribute("fill", "#dc3545"); // Red text for exceeding capacity
            } else {
                valueLabel.setAttribute("fill", "#007bff"); // Blue text for normal
            }
            
            valueLabel.textContent = icuDemand[i];
            svg.appendChild(valueLabel);
        }
        
        // Add chart title
        const title = document.createElementNS(svgNS, "text");
        title.setAttribute("x", width / 2);
        title.setAttribute("y", 15);
        title.setAttribute("text-anchor", "middle");
        title.setAttribute("font-size", "10");
        title.setAttribute("font-weight", "bold");
        title.setAttribute("fill", "#333");
        title.textContent = "ICU Bed Demand Forecast (Next 7 Days)";
        svg.appendChild(title);
        
        // Add confidence indicator
        const confidenceText = document.createElementNS(svgNS, "text");
        confidenceText.setAttribute("x", width - padding);
        confidenceText.setAttribute("y", padding);
        confidenceText.setAttribute("text-anchor", "end");
        confidenceText.setAttribute("font-size", "8");
        confidenceText.setAttribute("fill", "#666");
        confidenceText.textContent = "Confidence: 85%";
        svg.appendChild(confidenceText);
        
        // Add the SVG to the chart area
        chartArea.appendChild(svg);
        
        console.log("ICU forecast chart created successfully");
    }

    // Add this call to the existing DOMContentLoaded event listener
    document.addEventListener('DOMContentLoaded', function() {
        // ... existing code ...
        
        // Create the ICU forecast chart for Dr. Ayesha
        setTimeout(function() {
            createAyeshaICUForecastChart();
        }, 1000);
        
        // ... rest of existing code ...
    });
}); // <-- End of DOMContentLoaded listener 

// Add this function at the END of the script.js file, just before the closing });
// This will ensure it's defined and accessible

function updateLeilaForecastChart() {
    console.log("Attempting to update Leila's forecast chart...");
    
    // Target the chart area directly with a more specific selector
    const chartArea = document.querySelector('#view-leila .local-forecast-card .chart-area');
    
    if (!chartArea) {
        console.error("Could not find Leila's chart area!");
        return;
    }
    
    console.log("Found Leila's chart area:", chartArea);
    
    // Clear any existing content first
    chartArea.innerHTML = "";
    chartArea.className = 'chart-area bar-chart';
    
    // Set specific width and ensure no padding
    chartArea.style.width = "330px";
    // Create the bars directly
    const items = [
        { name: "Antivirals", value: 300 },
        { name: "Vaccines", value: 250 },
        { name: "Masks", value: 150 },
        { name: "Sanitizers", value: 100 }
    ];
    
    const maxValue = 350; // For scaling
    
    items.forEach(item => {
        const barHeight = (item.value / maxValue) * 110;
        
        const barDiv = document.createElement('div');
        barDiv.className = 'bar';
        barDiv.style.height = barHeight + 'px';
        barDiv.style.backgroundColor = '#f0ad4e';
        barDiv.title = `+${item.value}% Demand Increase`;
        
        // Adjust bar width for the wider chart
        barDiv.style.width = "60px"; // Wider bars for the 330px chart
        barDiv.style.margin = "0 8px"; // Slightly more spacing between bars
        
        const valueSpan = document.createElement('span');
        valueSpan.className = 'value';
        valueSpan.textContent = `+${item.value}%`;
        valueSpan.style.position = 'absolute';
        valueSpan.style.top = '-18px';
        valueSpan.style.left = '50%';
        valueSpan.style.transform = 'translateX(-50%)';
        valueSpan.style.fontSize = '0.7em';
        valueSpan.style.fontWeight = 'bold';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = item.name;
        nameSpan.style.position = 'absolute';
        nameSpan.style.bottom = '-20px';
        nameSpan.style.left = '50%';
        nameSpan.style.transform = 'translateX(-50%)';
        nameSpan.style.fontSize = '0.7em';
        
        barDiv.appendChild(valueSpan);
        barDiv.appendChild(nameSpan);
        chartArea.appendChild(barDiv);
    });
    
    console.log("Leila's chart has been updated with DOM elements and width set to 330px");
}

// Then call this function directly:
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Add this right at the end, after all other initialization
    setTimeout(function() {
        console.log("Delayed execution of Leila's chart update");
        updateLeilaForecastChart();
    }, 1000); // Wait 1 second to ensure everything else has loaded
});

// Add this function at the end of your script, just before the final closing brackets
function updateFaisalDemandChart() {
    console.log("Attempting to update Faisal's national demand chart...");
    
    // Target the chart area directly with a more specific selector
    const chartArea = document.querySelector('#view-faisal .national-demand-card .chart-area');
    
    if (!chartArea) {
        console.error("Could not find Faisal's national demand chart area!");
        return;
    }
    
    console.log("Found Faisal's chart area:", chartArea);
    
    // Clear any existing content and set correct class
    chartArea.innerHTML = "";
    chartArea.className = 'chart-area line-chart';
    
    // Dummy data points (week, demand index)
    const demandPoints = [
        { week: -4, value: 50 }, { week: -3, value: 55 }, { week: -2, value: 60 },
        { week: -1, value: 70 }, { week: 0, value: 85 }, // Current week
        { week: 1, value: 110 }, { week: 2, value: 130 } // Forecast
    ];
    
    // Chart dimensions
    const chartWidth = 330; // Set to match the width you want
    const chartHeight = 150;
    const padding = 20;
    const maxVal = 150;
    const totalWeeks = 6; // -4 to +2
    
    // Convert data points to SVG coordinates
    const demandPath = demandPoints.map(p =>
        `${padding + ((p.week + 4) / totalWeeks) * (chartWidth - 2 * padding)},${chartHeight - padding - (p.value / maxVal) * (chartHeight - 2 * padding)}`
    ).join(' L');
    
    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", `0 0 ${chartWidth} ${chartHeight}`);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    
    // Add chart title
    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    title.setAttribute("x", chartWidth / 2);
    title.setAttribute("y", 12);
    title.setAttribute("class", "chart-title");
    title.textContent = "National Demand Trend (Index)";
    svg.appendChild(title);
    
    // Add X and Y axes
    const xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxis.setAttribute("x1", padding);
    xAxis.setAttribute("y1", chartHeight - padding);
    xAxis.setAttribute("x2", chartWidth - padding);
    xAxis.setAttribute("y2", chartHeight - padding);
    xAxis.setAttribute("class", "axis-line");
    svg.appendChild(xAxis);
    
    const yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    yAxis.setAttribute("x1", padding);
    yAxis.setAttribute("y1", padding);
    yAxis.setAttribute("x2", padding);
    yAxis.setAttribute("y2", chartHeight - padding);
    yAxis.setAttribute("class", "axis-line");
    svg.appendChild(yAxis);
    
    // Add data line
    const dataLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
    dataLine.setAttribute("d", `M${demandPath}`);
    dataLine.setAttribute("class", "data-line");
    svg.appendChild(dataLine);
    
    // Add labels
    const maxLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    maxLabel.setAttribute("x", padding - 5);
    maxLabel.setAttribute("y", padding + 5);
    maxLabel.setAttribute("class", "axis-label");
    maxLabel.setAttribute("text-anchor", "end");
    maxLabel.textContent = maxVal;
    svg.appendChild(maxLabel);
    
    const minLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    minLabel.setAttribute("x", padding - 5);
    minLabel.setAttribute("y", chartHeight - padding);
    minLabel.setAttribute("class", "axis-label");
    minLabel.setAttribute("text-anchor", "end");
    minLabel.textContent = "0";
    svg.appendChild(minLabel);
    
    const startLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    startLabel.setAttribute("x", padding);
    startLabel.setAttribute("y", chartHeight - padding + 10);
    startLabel.setAttribute("class", "axis-label");
    startLabel.textContent = "Wk -4";
    svg.appendChild(startLabel);
    
    const nowLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    nowLabel.setAttribute("x", padding + (4 / totalWeeks) * (chartWidth - 2 * padding));
    nowLabel.setAttribute("y", chartHeight - padding + 10);
    nowLabel.setAttribute("class", "axis-label");
    nowLabel.setAttribute("text-anchor", "middle");
    nowLabel.textContent = "Now";
    svg.appendChild(nowLabel);
    
    const endLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    endLabel.setAttribute("x", chartWidth - padding);
    endLabel.setAttribute("y", chartHeight - padding + 10);
    endLabel.setAttribute("class", "axis-label");
    endLabel.setAttribute("text-anchor", "end");
    endLabel.textContent = "Wk +2";
    svg.appendChild(endLabel);
    
    // Add svg to chart area
    chartArea.appendChild(svg);
    
    console.log("Faisal's national demand chart has been updated.");
}

// Add this to your DOMContentLoaded listener, at the very end
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Add this right at the end, after all other initialization
    setTimeout(function() {
        console.log("Delayed execution of Faisal's chart update");
        updateFaisalDemandChart();
    }, 1000); // Wait 1 second to ensure everything else has loaded
});

// Simpler function that only targets Reem's accuracy chart specifically
function updateReemAccuracyChart() {
    console.log("Attempting to update only Reem's accuracy chart...");
    
    // Target specifically the model accuracy chart area in Reem's view
    const chartArea = document.querySelector('#view-reem .model-accuracy-card .chart-area');
    
    if (!chartArea) {
        console.error("Could not find Reem's model accuracy chart area");
        return;
    }
    
    // Replace only this specific chart
    chartArea.innerHTML = "";
    chartArea.className = 'chart-area line-chart';
    chartArea.style.width = "330px";
    chartArea.style.height = "150px";
    
    // Create SVG element for line chart
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 330 150");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    
    // Create simple line chart
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "20");
    line.setAttribute("y1", "130");
    line.setAttribute("x2", "310");
    line.setAttribute("y2", "20");
    line.setAttribute("stroke", "#28a745");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
    
    // Add accuracy text
    const testText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    testText.setAttribute("x", "165");
    testText.setAttribute("y", "75");
    testText.setAttribute("text-anchor", "middle");
    testText.setAttribute("fill", "#333");
    testText.textContent = "Accuracy: 70% → 92%";
    svg.appendChild(testText);
    
    // Add the svg to our target element
    chartArea.appendChild(svg);
    
    console.log("Updated only Reem's accuracy chart");
}

// Call this function directly within the original DOMContentLoaded event
// DO NOT add new event listeners that might conflict
document.addEventListener('DOMContentLoaded', function() {
    // Existing code remains unchanged...
    
    // Add this single call at the end of the existing initialization
    setTimeout(function() {
        updateReemAccuracyChart();
        // Also make sure Leila's chart is shown
        updateLeilaForecastChart();
    }, 1500);
});

// Remove any additional event listeners we added before

// Create direct function to replace Reem's placeholder text with a chart
function replaceReemAccuracyPlaceholder() {
    console.log("DIRECT APPROACH: Finding and replacing Reem's chart placeholder text");
    
    // Find the exact text node containing our placeholder
    let found = false;
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        { acceptNode: node => node.textContent.includes("showing accuracy improving from 70% to 92%") ? 
            NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT }
    );
    
    let textNode = walker.nextNode();
    if (textNode) {
        found = true;
        console.log("Found the placeholder text node:", textNode);
        
        // Get the parent element of the text
        const parentElement = textNode.parentElement;
        console.log("Parent element:", parentElement);
        
        // Clear the parent and prepare for chart
        parentElement.innerHTML = "";
        parentElement.style.width = "330px";
        parentElement.style.height = "150px";
        parentElement.style.margin = "0 auto";
        parentElement.style.position = "relative";
        parentElement.style.backgroundColor = "#f8f9fa";
        parentElement.style.border = "1px solid #dee2e6";
        
        // Create SVG for the chart
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 330 150");
        
        // Add background
        const background = document.createElementNS(svgNS, "rect");
        background.setAttribute("width", "330");
        background.setAttribute("height", "150");
        background.setAttribute("fill", "#f8f9fa");
        svg.appendChild(background);
        
        // Data for the chart
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
        const values = [70, 74, 78, 83, 88, 92];
        
        // Create the line path
        let pathData = "";
        for (let i = 0; i < months.length; i++) {
            const x = 30 + i * 50;
            const y = 120 - (values[i] - 70) * 2.5;
            if (i === 0) {
                pathData += `M${x},${y}`;
            } else {
                pathData += ` L${x},${y}`;
            }
        }
        
        // Add path
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", pathData);
        path.setAttribute("stroke", "#28a745");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");
        svg.appendChild(path);
        
        // X and Y axis
        const xAxis = document.createElementNS(svgNS, "line");
        xAxis.setAttribute("x1", "30");
        xAxis.setAttribute("y1", "120");
        xAxis.setAttribute("x2", "300");
        xAxis.setAttribute("y2", "120");
        xAxis.setAttribute("stroke", "#999");
        svg.appendChild(xAxis);
        
        const yAxis = document.createElementNS(svgNS, "line");
        yAxis.setAttribute("x1", "30");
        yAxis.setAttribute("y1", "30");
        yAxis.setAttribute("x2", "30");
        yAxis.setAttribute("y2", "120");
        yAxis.setAttribute("stroke", "#999");
        svg.appendChild(yAxis);
        
        // Add data points and labels
        for (let i = 0; i < months.length; i++) {
            const x = 30 + i * 50;
            const y = 120 - (values[i] - 70) * 2.5;
            
            // Add point
            const circle = document.createElementNS(svgNS, "circle");
            circle.setAttribute("cx", x);
            circle.setAttribute("cy", y);
            circle.setAttribute("r", "3");
            circle.setAttribute("fill", "#28a745");
            svg.appendChild(circle);
            
            // Add value label
            const valueText = document.createElementNS(svgNS, "text");
            valueText.setAttribute("x", x);
            valueText.setAttribute("y", y - 10);
            valueText.setAttribute("text-anchor", "middle");
            valueText.setAttribute("font-size", "9");
            valueText.textContent = `${values[i]}%`;
            svg.appendChild(valueText);
            
            // Add month label
            const monthText = document.createElementNS(svgNS, "text");
            monthText.setAttribute("x", x);
            monthText.setAttribute("y", "135");
            monthText.setAttribute("text-anchor", "middle");
            monthText.setAttribute("font-size", "9");
            monthText.textContent = months[i];
            svg.appendChild(monthText);
        }
        
        // Add title
        const titleText = document.createElementNS(svgNS, "text");
        titleText.setAttribute("x", "165");
        titleText.setAttribute("y", "15");
        titleText.setAttribute("text-anchor", "middle");
        titleText.setAttribute("font-size", "11");
        titleText.setAttribute("font-weight", "bold");
        titleText.textContent = "Model Accuracy Improvement";
        svg.appendChild(titleText);
        
        // Add the svg to the parent
        parentElement.appendChild(svg);
        
        console.log("Successfully replaced text with chart");
    } else {
        console.error("Could not find the placeholder text node");
    }

    // If not found with TreeWalker, try a more direct approach
    if (!found) {
        console.log("Trying alternate approach");
        const elements = document.querySelectorAll('#view-reem .card');
        for (const card of elements) {
            if (card.textContent.includes("Learning Timeline & Accuracy")) {
                console.log("Found the Learning Timeline card:", card);
                const chartArea = card.querySelector('.chart-area');
                if (chartArea) {
                    console.log("Found chart area within the card");
                    // Create chart in this area (similar code as above)
                    // ...
                }
            }
        }
    }
}

// Run this after page load with a delay
setTimeout(function() {
    console.log("Attempting to replace Reem's chart placeholder");
    replaceReemAccuracyPlaceholder();
}, 2000);

// Direct approach to replace Ayesha's chart placeholder text with actual chart
function replaceAyeshaChartPlaceholder() {
    console.log("DIRECT APPROACH: Finding and replacing Ayesha's chart placeholder text");
    
    // Find ALL chart areas in Ayesha's view
    const allChartAreas = document.querySelectorAll('#view-ayesha .chart-area');
    console.log(`Found ${allChartAreas.length} chart areas in Ayesha's view`);
    
    for (const chartArea of allChartAreas) {
        // Check if this is the one with placeholder text we want to replace
        if (chartArea.textContent.includes("Line Chart showing projected ICU demand") || 
            chartArea.textContent.includes("exceeding capacity within 3 days")) {
            
            console.log("FOUND THE TARGET CHART AREA with placeholder text!");
            
            // Clear existing content and set up for chart
            chartArea.innerHTML = '';
            chartArea.style.height = '150px';
            chartArea.style.width = '100%';
            chartArea.style.maxWidth = '330px';
            chartArea.style.margin = '0 auto';
            
            // Create SVG element
            const svgNS = "http://www.w3.org/2000/svg";
            const width = 330;
            const height = 150;
            const padding = 30;
            
            const svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "100%");
            svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
            svg.style.backgroundColor = "#f8f9fa";
            svg.style.border = "1px solid #dee2e6";
            
            // Data for the chart (7 days forecast)
            const days = ["Today", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"];
            const icuDemand = [85, 92, 109, 126, 138, 145, 149]; // Increasing demand
            const icuCapacity = 120; // Constant capacity line
            
            // Calculate scales
            const xScale = (width - 2 * padding) / (days.length - 1);
            const yMax = Math.max(...icuDemand, icuCapacity) * 1.1; // 10% higher than max value
            const yScale = (height - 2 * padding) / yMax;
            
            // Draw grid lines
            for (let i = 0; i <= 5; i++) {
                const y = height - padding - (i * (height - 2 * padding) / 5);
                const gridLine = document.createElementNS(svgNS, "line");
                gridLine.setAttribute("x1", padding);
                gridLine.setAttribute("y1", y);
                gridLine.setAttribute("x2", width - padding);
                gridLine.setAttribute("y2", y);
                gridLine.setAttribute("stroke", "#e0e0e0");
                gridLine.setAttribute("stroke-dasharray", "2,2");
                svg.appendChild(gridLine);
                
                // Add Y-axis labels
                const yLabel = document.createElementNS(svgNS, "text");
                yLabel.setAttribute("x", padding - 5);
                yLabel.setAttribute("y", y + 4);
                yLabel.setAttribute("text-anchor", "end");
                yLabel.setAttribute("font-size", "8");
                yLabel.setAttribute("fill", "#666");
                yLabel.textContent = Math.round(i * yMax / 5);
                svg.appendChild(yLabel);
            }
            
            // Create capacity line (horizontal line)
            const capacityY = height - padding - (icuCapacity * yScale);
            const capacityLine = document.createElementNS(svgNS, "line");
            capacityLine.setAttribute("x1", padding);
            capacityLine.setAttribute("y1", capacityY);
            capacityLine.setAttribute("x2", width - padding);
            capacityLine.setAttribute("y2", capacityY);
            capacityLine.setAttribute("stroke", "#dc3545"); // Red line for capacity
            capacityLine.setAttribute("stroke-width", "2");
            capacityLine.setAttribute("stroke-dasharray", "5,3");
            svg.appendChild(capacityLine);
            
            // Add capacity label
            const capacityLabel = document.createElementNS(svgNS, "text");
            capacityLabel.setAttribute("x", width - padding + 5);
            capacityLabel.setAttribute("y", capacityY + 3);
            capacityLabel.setAttribute("font-size", "8");
            capacityLabel.setAttribute("fill", "#dc3545");
            capacityLabel.setAttribute("text-anchor", "start");
            capacityLabel.textContent = "Capacity";
            svg.appendChild(capacityLabel);
            
            // Create the demand line
            let pathData = "";
            const points = [];
            
            for (let i = 0; i < days.length; i++) {
                const x = padding + i * xScale;
                const y = height - padding - (icuDemand[i] * yScale);
                points.push({ x, y });
                
                if (i === 0) {
                    pathData += `M${x},${y}`;
                } else {
                    pathData += ` L${x},${y}`;
                }
                
                // Add X-axis labels (days)
                const dayLabel = document.createElementNS(svgNS, "text");
                dayLabel.setAttribute("x", x);
                dayLabel.setAttribute("y", height - padding + 15);
                dayLabel.setAttribute("text-anchor", "middle");
                dayLabel.setAttribute("font-size", "8");
                dayLabel.setAttribute("fill", "#666");
                dayLabel.textContent = days[i];
                svg.appendChild(dayLabel);
            }
            
            // Add the line path
            const path = document.createElementNS(svgNS, "path");
            path.setAttribute("d", pathData);
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#007bff"); // Blue line for demand
            path.setAttribute("stroke-width", "2");
            svg.appendChild(path);
            
            // Add data points
            for (let i = 0; i < points.length; i++) {
                const circle = document.createElementNS(svgNS, "circle");
                circle.setAttribute("cx", points[i].x);
                circle.setAttribute("cy", points[i].y);
                circle.setAttribute("r", "3");
                
                // Highlight the point where demand exceeds capacity
                if (icuDemand[i] > icuCapacity) {
                    circle.setAttribute("fill", "#dc3545"); // Red fill
                    circle.setAttribute("stroke", "#dc3545");
                } else {
                    circle.setAttribute("fill", "#007bff"); // Blue fill
                    circle.setAttribute("stroke", "#007bff");
                }
                
                svg.appendChild(circle);
                
                // Add data point values
                const valueLabel = document.createElementNS(svgNS, "text");
                valueLabel.setAttribute("x", points[i].x);
                valueLabel.setAttribute("y", points[i].y - 8);
                valueLabel.setAttribute("text-anchor", "middle");
                valueLabel.setAttribute("font-size", "8");
                valueLabel.setAttribute("font-weight", "bold");
                
                if (icuDemand[i] > icuCapacity) {
                    valueLabel.setAttribute("fill", "#dc3545"); // Red text for exceeding capacity
                } else {
                    valueLabel.setAttribute("fill", "#007bff"); // Blue text for normal
                }
                
                valueLabel.textContent = icuDemand[i];
                svg.appendChild(valueLabel);
            }
            
            // Add chart title
            const title = document.createElementNS(svgNS, "text");
            title.setAttribute("x", width / 2);
            title.setAttribute("y", 15);
            title.setAttribute("text-anchor", "middle");
            title.setAttribute("font-size", "10");
            title.setAttribute("font-weight", "bold");
            title.setAttribute("fill", "#333");
            title.textContent = "ICU Bed Demand Forecast (Next 7 Days)";
            svg.appendChild(title);
            
            // Add confidence indicator
            const confidenceText = document.createElementNS(svgNS, "text");
            confidenceText.setAttribute("x", width - padding);
            confidenceText.setAttribute("y", padding);
            confidenceText.setAttribute("text-anchor", "end");
            confidenceText.setAttribute("font-size", "8");
            confidenceText.setAttribute("fill", "#666");
            confidenceText.textContent = "Confidence: 85%";
            svg.appendChild(confidenceText);
            
            // Add the SVG to the chart area
            chartArea.appendChild(svg);
            
            console.log("Successfully replaced Ayesha's chart placeholder with actual chart");
            return true; // Successfully replaced chart
        }
    }
    
    console.error("Could not find the exact chart area with the placeholder text");
    return false;
}

// Run this function after page load with multiple attempts
setTimeout(function() {
    console.log("First attempt to replace Ayesha's chart placeholder");
    if (!replaceAyeshaChartPlaceholder()) {
        console.log("First attempt failed, trying again in 1 second");
        setTimeout(replaceAyeshaChartPlaceholder, 1000);
        
        // One more attempt after 3 seconds
        setTimeout(function() {
            console.log("Final attempt to replace Ayesha's chart placeholder");
            if (!replaceAyeshaChartPlaceholder()) {
                console.error("All attempts to replace chart placeholder failed");
            }
        }, 3000);
    }
}, 1000);

// Also try when the document is fully ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(replaceAyeshaChartPlaceholder, 500);
});

// Also try when user clicks Ayesha's tab
document.addEventListener('click', function(e) {
    if (e.target && e.target.matches('.nav-link') && e.target.textContent.includes('Ayesha')) {
        console.log("User clicked Ayesha's tab, trying to replace chart");
        setTimeout(replaceAyeshaChartPlaceholder, 300);
    }
});
