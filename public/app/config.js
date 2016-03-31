var config_module = angular.module('app.config', [])
    .constant('CONFIG', {
        'SYSTEM_NAME': 'My Angular JS project',
        'GOOGLE_ANALYTICS_ID': '',
        'BASE_URL': '',
        'API_URL': 'http://localhost:3000/api/items/',
        'SYSTEM_LANGUAGE': ''
    });