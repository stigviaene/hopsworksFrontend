'use strict';
/*
 * Service responsible for communicating with the Cuneiform backend.
 */
angular.module('hopsWorksApp')

        .factory('CuneiformService', ['$http', function ($http) {
            var service = {
              /**
               * Gets the stored jobhistory objects for the given projectId and type.
               * @param {int} projectId
               * @param {string} type, capitalised service name.
               * @returns {unresolved} A list of jobhistory objects.
               */
              inspectStoredWorkflow: function (projectId, path) {
                return $http.get('/api/project/' + projectId + '/jobs/cuneiform/inspect/' + path);
              }
            };
            return service;
          }]);