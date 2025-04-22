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
    const ayeshaHeatmapArea = document.querySelector('#view-ayesha .heatmap-placeholder .map-area');
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
    const leilaUrgentAlertContainer = document.getElementById('leilaUrgentAlertContainer');
    const leilaUrgentAlertText = document.getElementById('leilaUrgentAlertText');
    const leilaUrgentAlertTime = document.getElementById('leilaUrgentAlertTime');
    const leilaForecastChartArea = document.querySelector('#view-leila .forecast-card .chart-area');
    const leilaActionedBtn = document.getElementById('leilaActionedBtn');
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
    const faisalDemandChartArea = document.querySelector('#view-faisal .national-demand-card .chart-area');
    const faisalAutoAdjustToggle = document.getElementById('faisalAutoAdjustToggle');
    const faisalViewProdDetailsBtn = document.getElementById('faisalViewProdDetailsBtn');
    const faisalManualOverrideBtn = document.getElementById('faisalManualOverrideBtn');
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

    // --- State Variables (Simple Simulation) ---
    let planApproved = false;
    let planDecisionMade = false; // Track if Modify/Decline was clicked for the main plan
    let logisticsAlertSent = false; // Tracks if the explicit "Send Alert Now" was clicked
    let logisticsDecisionMade = false;
    let campaignDecisionMade = false;
    let advisoryDecisionMade = false;
    let shipmentDispatched = false;
    let pharmacyPrepared = false;
    let modelRetrained = false;
    let faisalAutoAdjustEnabled = false; // State for toggle

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
        }
        if (ayeshaHeatmapArea) {
            ayeshaHeatmapArea.innerHTML = `<strong>Deira Clinic Activity (Confirmed Cases):</strong><br>${heatmapSummary || 'No confirmed cases reported.'}`;
            ayeshaHeatmapArea.style.fontSize = '0.9em'; // Adjust font size if needed
        }
        if (ayeshaTrendChartArea) {
            ayeshaTrendChartArea.innerHTML = `<strong>Daily Visits (Symptom Reports):</strong><br><div style="height: 60px; border: 1px solid #ccc; padding: 5px; overflow-x: auto; white-space: nowrap;">${trendSummary || 'No visit data.'}</div>`;
        }
         if (ayeshaTrendDataSources) {
             ayeshaTrendDataSources.textContent = `Data Sources: ${totalVisits} GP/Clinic Visits (Simulated), Social Media Mentions ('flu', 'fever')`;
         }

        // Add updates for other personas if needed, using the processed data
        // e.g., Update Leila's local forecast based on Deira Urgent Care counts
        // Note: This part was removed in the revert, as the button clicks will now handle populating other views.
    }


    // --- View Switching Logic (Original) ---
    function switchView(selectedRole) {
        dashboardViews.forEach(view => {
            view.classList.remove('active-view');
        });
        const viewId = `view-${selectedRole}`;
        const activeView = document.getElementById(viewId);
        if (activeView) {
            activeView.classList.add('active-view');
            console.log(`Switched to view: ${viewId}`);
        } else {
            console.warn(`View ID not found: ${viewId}`);
        }
    }

    roleSelect.addEventListener('change', function() {
        switchView(this.value);
    });

    // --- Interaction Logic ---

    // --- Dr. Ayesha's Recommendations ---

    // 1. Health Action Plan
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
                    imranAlertMessage.innerHTML = `<strong style="color: red;"><i class="fas fa-exclamation-triangle"></i> URGENT ALERT:</strong> Health Action Plan approved. High flu activity confirmed (${overallConfirmationRate}% rate). Prepare for stock redistribution.`;
                }
                if (imranActionMessage) {
                    imranActionMessage.innerHTML = `<strong><i class="fas fa-random"></i> Action Required:</strong> Review AI recommended redistribution plan below.`;
                }
                if (imranRouteDetails) {
                    imranRouteDetails.style.display = 'block';
                }
                if (confirmDispatchBtn) {
                    confirmDispatchBtn.disabled = false;
                    console.log("Ayesha: Enabled Imran's Confirm Dispatch button.");
                }
                if (modifyDispatchBtn) modifyDispatchBtn.disabled = false;

                if (imranShortfallMessage) {
                    imranShortfallMessage.innerHTML = `Projected Shortfall (Deira Hub, 48h): <strong style="color:red;">Vaccines: ~3,500 units, Antivirals: ~2,200 units</strong>`;
                    imranShortfallMessage.style.color = 'red';
                }
                if (shipmentStatus) {
                    shipmentStatus.innerHTML = '<i class="fas fa-tasks"></i> Plan Approved - Awaiting Dispatch Confirmation';
                    shipmentStatus.className = 'status-pending';
                    shipmentStatus.style.color = 'orange';
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
             console.log("Leila: Mark as Actioned button clicked. Checking conditions (shipmentDispatched:", shipmentDispatched, "pharmacyPrepared:", pharmacyPrepared, ")");
            if (shipmentDispatched && !pharmacyPrepared) {
                pharmacyPrepared = true; // MAIN STATE CHANGE FOR WORKFLOW
                this.disabled = true;
                this.innerHTML = '<i class="fas fa-check-square"></i> Pharmacy Prepared';
                addLogEntry(imranActivityLog, 'Leila (Pharmacist) confirmed pharmacy PREPARED for delivery.', 'fa-check-square', 'blue');
                console.log("Leila: Pharmacy Prepared. Calling updateFaisalDashboard().");
                if(leilaConfirmationMsg) showConfirmation(leilaConfirmationMsg, 'Pharmacy marked as prepared for delivery.');
                if (leilaUrgentAlertText) {
                    leilaUrgentAlertText.innerHTML += `<br><strong style='color:green;'><i class='fas fa-check-circle'></i> Pharmacy prepared for delivery.</strong>`;
                }

                // --- Update Faisal's Dashboard ---
                updateFaisalDashboard();

            } else {
                 console.log("Leila: Mark as Actioned button clicked, but conditions not met.");
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
            faisalDemandChartArea.innerHTML = '<strong style="color:red;">[National Trend Chart showing steep incline over next 14 days]</strong>';
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


    // --- Initial Setup ---
    console.log("--- Initial Setup ---");
    processDataForDashboard(); // Process data and update Dr. Ayesha's dashboard on load
    switchView(roleSelect.value); // Set initial view

    // Initial button states - disable buttons based on workflow state vars
    if (approvePlanBtn) approvePlanBtn.disabled = planApproved || planDecisionMade;
    if (modifyPlanBtn) modifyPlanBtn.disabled = planApproved || planDecisionMade;
    if (declinePlanBtn) declinePlanBtn.disabled = planApproved || planDecisionMade;

    if (sendLogisticsAlertBtn) sendLogisticsAlertBtn.disabled = logisticsAlertSent || logisticsDecisionMade;
    if (dismissLogisticsBtn) dismissLogisticsBtn.disabled = logisticsAlertSent || logisticsDecisionMade;

    if (initiateCampaignBtn) initiateCampaignBtn.disabled = campaignDecisionMade;
    if (scheduleCampaignBtn) scheduleCampaignBtn.disabled = campaignDecisionMade;
    if (declineCampaignBtn) declineCampaignBtn.disabled = campaignDecisionMade;

    if (issueAdvisoryBtn) issueAdvisoryBtn.disabled = advisoryDecisionMade;
    if (reviewAdvisoryBtn) reviewAdvisoryBtn.disabled = advisoryDecisionMade;
    if (declineAdvisoryBtn) declineAdvisoryBtn.disabled = advisoryDecisionMade;

    // Workflow buttons
    if (confirmDispatchBtn) confirmDispatchBtn.disabled = !planApproved || shipmentDispatched;
    if (modifyDispatchBtn) modifyDispatchBtn.disabled = !planApproved || shipmentDispatched;
    if (leilaActionedBtn) leilaActionedBtn.disabled = !shipmentDispatched || pharmacyPrepared;

    console.log("Initial button states set.");
    // console.log("Initial State: planApproved:", planApproved, "logisticsAlertSent:", logisticsAlertSent, "shipmentDispatched:", shipmentDispatched, "pharmacyPrepared:", pharmacyPrepared);
    console.log("---------------------");

}); 
