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
    const approvePlanBtn = document.getElementById('approvePlanBtn');
    const sendLogisticsAlertBtn = document.getElementById('sendLogisticsAlertBtn');

    // Imran
    const imranAlertMessage = document.getElementById('imranAlertMessage');
    const imranShortfallMessage = document.getElementById('imranShortfallMessage');
    const imranActionMessage = document.getElementById('imranActionMessage');
    const imranRouteDetails = document.getElementById('imranRouteDetails');
    const confirmDispatchBtn = document.getElementById('confirmDispatchBtn');
    const modifyDispatchBtn = document.getElementById('modifyDispatchBtn');
    const shipmentStatus = document.getElementById('shipmentStatus');

    // Leila
    const leilaUrgentAlertContainer = document.getElementById('leilaUrgentAlertContainer');
    const leilaUrgentAlertText = document.getElementById('leilaUrgentAlertText');
    const leilaUrgentAlertTime = document.getElementById('leilaUrgentAlertTime');
    const leilaActionedBtn = document.getElementById('leilaActionedBtn');
    const leilaConfirmationMsg = document.getElementById('leilaConfirmationMsg');
    const leilaForecastChartArea = document.querySelector('#view-leila .local-forecast-card .chart-area');


    // Faisal
    const faisalDemandSignal = document.getElementById('faisalDemandSignal');
    const faisalProdRecommendation = document.getElementById('faisalProdRecommendation');
    const faisalProdQueue = document.getElementById('faisalProdQueue');
    const faisalDemandChartArea = document.querySelector('#view-faisal .national-demand-card .chart-area');


    // Reem
    const retrainModelBtn = document.getElementById('retrainModelBtn');
    const lastRetrainingTime = document.getElementById('lastRetrainingTime');
    const retrainConfirmationMsg = document.getElementById('retrainConfirmationMsg');


    // --- State Variables (Simple Simulation) ---
    let planApproved = false;
    let logisticsAlertSent = false;
    let shipmentDispatched = false;
    let pharmacyPrepared = false;
    let modelRetrained = false;

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
                // Adjust thresholds based on data (max confirmed cases per clinic is ~10-15 in sample)
                if (count >= 8) { riskLevel = 'High'; color = 'red'; }
                else if (count >= 4) { riskLevel = 'Medium'; color = 'orange'; }
                return `<div style="margin-bottom: 5px;"><span style="color:${color}; font-weight:bold;">${riskLevel} Risk</span> - ${clinic}: ${count} confirmed cases</div>`;
            })
            .join('');

        const trendSummary = uniqueDates.map(date => {
            const count = symptomReportsByDate[date] || 0;
            // Simple bar representation
            const barWidth = Math.min(100, count * 5); // Scale width based on count
            return `<div style="margin-bottom: 3px; display: flex; align-items: center;">
                        <span style="width: 80px; display: inline-block;">${date}:</span>
                        <div style="width: ${barWidth}px; height: 15px; background-color: #0a2e5c; margin-right: 5px;"></div>
                        <span>${count} visits</span>
                    </div>`;
        }).join('');


        const overallConfirmationRate = totalVisits > 0 ? ((totalConfirmedFlu / totalVisits) * 100).toFixed(1) : 0;
        const confirmedDeiraUrgentCare = confirmedCasesByClinic['Deira Urgent Care'] || 0;
        const totalDeiraUrgentCareVisits = patientData.filter(p => p.Clinic === 'Deira Urgent Care').length;


        // --- Update Dashboard Elements (Initial State) ---

        // Dr. Ayesha
        if (ayeshaAlertText) {
            ayeshaAlertText.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ALERT: Flu Surge Detected in Deira (${overallConfirmationRate}% confirmation rate)`;
        }
        if (ayeshaHeatmapArea) {
            ayeshaHeatmapArea.innerHTML = `<strong>Deira Clinic Activity (Confirmed Cases):</strong><br>${heatmapSummary || 'No confirmed cases reported.'}`;
            ayeshaHeatmapArea.style.fontSize = '0.9em'; // Adjust font size if needed
        }
        if (ayeshaTrendChartArea) {
            ayeshaTrendChartArea.innerHTML = `<strong>Daily Visits (Symptom Reports):</strong><br>${trendSummary || 'No visit data.'}`;
        }
         if (ayeshaTrendDataSources) {
             ayeshaTrendDataSources.textContent = `Data Sources: ${totalVisits} GP/Clinic Visits (Simulated), Social Media Mentions ('flu', 'fever')`;
         }

        // Imran (Initial Context - before alert sent)
        if (imranAlertMessage && !logisticsAlertSent) {
            let initialImranAlertColor = overallConfirmationRate > 30 ? 'orange' : 'grey'; // Example threshold
            imranAlertMessage.innerHTML = `<strong style="color:${initialImranAlertColor};"><i class="fas fa-info-circle"></i> ALERT:</strong> Monitoring situation. Overall Deira confirmation rate: ${overallConfirmationRate}%. Awaiting specific instructions.`;
        }
        if (imranShortfallMessage && !logisticsAlertSent) {
             imranShortfallMessage.textContent = `Projected Shortfall: Analysis pending based on approved plan.`;
             imranShortfallMessage.style.color = 'grey';
        }


        // Leila (Initial Context - before dispatch)
        if (leilaForecastChartArea && !shipmentDispatched) {
            let initialLeilaForecastHTML = `[Initial Data: ${confirmedDeiraUrgentCare} confirmed flu cases & ${totalDeiraUrgentCareVisits} total visits reported at nearby Deira Urgent Care. Monitor for specific alerts.]`;
            if (confirmedDeiraUrgentCare > 5) { // Example threshold for higher initial concern
                initialLeilaForecastHTML = `<strong style="color:orange;">[Elevated Activity Nearby: ${confirmedDeiraUrgentCare} confirmed flu cases & ${totalDeiraUrgentCareVisits} total visits reported at Deira Urgent Care. Prepare for potential demand increase.]</strong>`;
            }
            leilaForecastChartArea.innerHTML = initialLeilaForecastHTML;
        }

        // Faisal (Initial Context - before plan approved)
        if (faisalDemandSignal && !planApproved) {
            if (overallConfirmationRate > 35) { // Example threshold for higher initial concern
                 faisalDemandSignal.innerHTML = '<strong><i class="fas fa-chart-line"></i> Signal:</strong> <span style="color:orange;">Elevated flu activity detected in Deira network (${overallConfirmationRate}% rate). Monitoring national impact...</span>';
            } else {
                 faisalDemandSignal.innerHTML = '<strong><i class="fas fa-chart-line"></i> Signal:</strong> Monitoring national health network signals...';
            }
        }
         if (faisalDemandChartArea && !planApproved) {
             faisalDemandChartArea.innerHTML = '[National Trend Chart - Currently Stable]';
         }
         if (faisalProdRecommendation && !planApproved) {
             faisalProdRecommendation.innerHTML = '<strong><i class="fas fa-cogs"></i> AI Recommendation:</strong> Maintain standard production schedule.';
         }
         if (faisalProdQueue && !planApproved) {
             faisalProdQueue.innerHTML = `
                <li>Standard Antibiotic #AB123</li>
                <li>Pain Relief Med #PR789</li>
                <li>Routine Stock Replenishment</li>
            `;
         }

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

    // Dr. Ayesha: Approve Plan
    if (approvePlanBtn) {
        approvePlanBtn.addEventListener('click', function() {
            if (!planApproved) {
                planApproved = true;
                this.disabled = true;
                this.innerHTML = '<i class="fas fa-check-double"></i> Plan Approved';
                sendLogisticsAlertBtn.disabled = false; // Enable the next step
                console.log("Health Action Plan Approved.");

                // Update Faisal's Dashboard (Now triggered by plan approval)
                updateFaisalDashboard(); // This function now contains the specific updates for Faisal
            }
        });
    } else { console.error("approvePlanBtn not found"); }

    // Dr. Ayesha: Send Logistics Alert -> Updates Imran's View
    if (sendLogisticsAlertBtn) {
        sendLogisticsAlertBtn.disabled = true; // Initially disabled until plan approved
        sendLogisticsAlertBtn.addEventListener('click', function() {
            if (planApproved && !logisticsAlertSent) {
                logisticsAlertSent = true;
                this.disabled = true;
                this.innerHTML = '<i class="fas fa-paper-plane"></i> Alert Sent';
                console.log("Logistics Alert Sent to Imran.");

                // --- Update Imran's Dashboard (Specific Action) ---
                const overallConfirmationRate = patientData.length > 0 ? ((patientData.filter(p => p.ConfirmedFlu === "Yes").length / patientData.length) * 100).toFixed(1) : 0; // Recalculate for message

                if (imranAlertMessage) {
                    imranAlertMessage.innerHTML = `<strong style="color: red;"><i class="fas fa-exclamation-triangle"></i> URGENT ALERT:</strong> Health Action Plan approved. High flu activity confirmed (${overallConfirmationRate}% rate). Prepare for stock redistribution.`;
                }
                if (imranActionMessage) {
                    imranActionMessage.innerHTML = `<strong><i class="fas fa-random"></i> Action Required:</strong> Review AI recommended redistribution plan below.`;
                }
                if (imranRouteDetails) {
                    imranRouteDetails.style.display = 'block'; // Show the route details
                }
                if (confirmDispatchBtn) confirmDispatchBtn.disabled = false; // Enable Imran's actions
                if (modifyDispatchBtn) modifyDispatchBtn.disabled = false;

                if (imranShortfallMessage) {
                    imranShortfallMessage.innerHTML = `Projected Shortfall (Deira Hub, 48h): <strong style="color:red;">Vaccines: ~3,500 units, Antivirals: ~2,200 units</strong>`;
                    imranShortfallMessage.style.color = 'red'; // Make text red
                }
                if (shipmentStatus) { // Update status if needed
                    shipmentStatus.innerHTML = '<i class="fas fa-tasks"></i> Plan Approved - Awaiting Dispatch Confirmation';
                    shipmentStatus.className = 'status-pending';
                    shipmentStatus.style.color = 'orange';
                }

                // Optional: Switch view to Imran
                // setTimeout(() => {
                //     roleSelect.value = 'imran';
                //     switchView('imran');
                // }, 500);
            }
        });
    } else { console.error("sendLogisticsAlertBtn not found"); }

    // Imran: Confirm Dispatch -> Updates Leila's View
    if (confirmDispatchBtn) {
        confirmDispatchBtn.addEventListener('click', function() {
            if (logisticsAlertSent && !shipmentDispatched) {
                shipmentDispatched = true;
                this.disabled = true;
                if (modifyDispatchBtn) modifyDispatchBtn.disabled = true;
                this.innerHTML = '<i class="fas fa-truck-loading"></i> Dispatched';
                console.log("Shipment Dispatched to Deira.");

                // Update Imran's own status
                if (shipmentStatus) {
                    shipmentStatus.innerHTML = '<i class="fas fa-shipping-fast"></i> Dispatched (ETA: 4 hours)';
                    shipmentStatus.className = 'status-dispatched'; // You might want a CSS class for this
                    shipmentStatus.style.color = 'green';
                    shipmentStatus.style.fontWeight = 'bold';
                }

                // --- Update Leila's Dashboard (Specific Action) ---
                if (leilaUrgentAlertContainer) leilaUrgentAlertContainer.style.display = 'block';
                if (leilaUrgentAlertText) {
                    leilaUrgentAlertText.innerHTML = `<strong><i class="fas fa-truck"></i> INCOMING STOCK:</strong> Flu demand rising rapidly. Replenishment shipment (#FLU-DXB-001) is <strong>en route</strong>. <strong>ETA: Approx 4 hours.</strong> Prepare storage.`;
                }
                 if (leilaUrgentAlertTime) {
                    leilaUrgentAlertTime.textContent = `Received: ${getCurrentTime()}`;
                }
                if (leilaUrgentAlertContainer) {
                    leilaUrgentAlertContainer.className = 'alert-item urgent'; // Ensure style is urgent
                }
                if (leilaActionedBtn) leilaActionedBtn.disabled = false; // Enable Leila's action button

                // Update Leila's forecast chart placeholder with more specific info
                if (leilaForecastChartArea) {
                    leilaForecastChartArea.innerHTML = `<strong style="color:red;">[Forecast Update: Significant increase expected. Antivirals +300%, Vaccines +250%, Masks +150%, Sanitizers +100%]</strong>`;
                }


                // Optional: Switch view to Leila
                // setTimeout(() => {
                //     roleSelect.value = 'leila';
                //     switchView('leila');
                // }, 500);
            }
        });
    } else { console.error("confirmDispatchBtn not found"); }

    // Leila: Mark as Actioned
     if (leilaActionedBtn) {
        leilaActionedBtn.addEventListener('click', function() {
            if (shipmentDispatched && !pharmacyPrepared) {
                pharmacyPrepared = true;
                this.disabled = true;
                this.innerHTML = '<i class="fas fa-check-square"></i> Pharmacy Prepared';
                console.log("Leila marked pharmacy as prepared.");
                if(leilaConfirmationMsg) showConfirmation(leilaConfirmationMsg, 'Pharmacy marked as prepared for delivery.');

                 // Update alert text to confirm preparation
                 if (leilaUrgentAlertText) {
                    leilaUrgentAlertText.innerHTML += `<br><strong style='color:green;'><i class='fas fa-check-circle'></i> Pharmacy prepared for delivery.</strong>`;
                }
            }
        });
    } else { console.error("leilaActionedBtn not found"); }


    // Faisal: Update based on Ayesha's action (called from Ayesha's button)
    // This function now ONLY contains the specific updates for Faisal when the plan is approved.
    function updateFaisalDashboard() {
        if (faisalDemandSignal) {
            faisalDemandSignal.innerHTML = '<strong><i class="fas fa-chart-line"></i> Signal:</strong> <span style="color:red;">URGENT - National Surge Projected!</span> Sustained high demand for flu medications projected nationally for the next 2 weeks based on Diviner aggregate forecast.';
        }
        if (faisalDemandChartArea) {
            faisalDemandChartArea.innerHTML = '<strong style="color:red;">[National Trend Chart showing steep incline over next 14 days]</strong>'; // Update placeholder text
        }
        if (faisalProdRecommendation) {
            faisalProdRecommendation.innerHTML = '<strong><i class="fas fa-cogs"></i> AI Recommendation:</strong> <span style="color:red;">PRIORITIZE PRODUCTION RUNS</span> to meet projected national surge demand.';
        }
        if (faisalProdQueue) {
            // Clear existing queue and add prioritized items
            faisalProdQueue.innerHTML = `
                <li class="priority-high"><strong>Flu Vaccine Batch #FV789 (URGENT)</strong></li>
                <li class="priority-high"><strong>Antiviral Batch #AV456 (URGENT)</strong></li>
                <li>Standard Antibiotic #AB123</li>
                <li>Pain Relief Med #PR789</li>
                <li>Routine Stock Replenishment</li>
            `;
        }
        console.log("Faisal's dashboard updated with demand signal due to plan approval.");
    }


    // Reem: Retrain Model
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


    // --- Initial Setup ---
    processDataForDashboard(); // Process data and update ALL dashboards with initial context on load
    switchView(roleSelect.value); // Set initial view
    // Ensure buttons that depend on prior actions are initially disabled
    if (sendLogisticsAlertBtn) sendLogisticsAlertBtn.disabled = !planApproved;
    if (confirmDispatchBtn) confirmDispatchBtn.disabled = !logisticsAlertSent;
    if (modifyDispatchBtn) modifyDispatchBtn.disabled = !logisticsAlertSent;
    if (leilaActionedBtn) leilaActionedBtn.disabled = !shipmentDispatched;

}); 