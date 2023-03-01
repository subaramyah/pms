export const NAV_ITEMS_LIST = [
    {
        permitTo: ['ROLE_NURSE','ROLE_PHYSICIAN'], icon: 'inbox', navItem: 'Inbox', route: 'inbox/sharedinbox'
    },
    {
        permitTo: ['ROLE_PHYSICIAN'], icon: 'notes', navItem: 'Visit Form', route: 'visit/visit_form'
    },
    {
        permitTo: ['ROLE_NURSE'], icon: 'notes', navItem: 'Vital Signs', route: 'visit/vital_form'
    },
    { permitTo: ['ROLE_ADMIN'], icon: 'how_to_reg', navItem: 'Register Employee', route: 'admin/userRegistration'},
    {
        permitTo: ['ROLE_PATIENT'], icon: 'details', navItem: 'Patient Details', route: 'usermanagement/patientDetails'
    },
    {
        permitTo: ['ROLE_ADMIN'], icon: 'people', navItem: 'Patient users', route: 'admin/userList'
    },
    {
        permitTo: ['ROLE_ADMIN'], icon: 'supervised_user_circle', navItem: 'Hospital Users', route: 'admin/hospitalUserList'
    },
    {
        permitTo: ['ROLE_PATIENT'], icon: 'schedule', navItem: 'Book Appointment', route: 'visit/appointmentForm'
    },
    {
        permitTo: ['ROLE_PHYSICIAN'], icon: 'event_note', navItem: 'Appointment Details', route: 'schedule/appointmentDetails'
    },
    {
        permitTo: ['ROLE_PHYSICIAN'], icon: 'calendar_today', navItem: 'Calender', route: 'usermanagement/calender'
    },
];
