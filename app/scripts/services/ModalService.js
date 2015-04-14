'use strict';

angular.module('hopsWorksApp')
  .factory('ModalService', ['$modal', function ($modal) {
    return {

      confirm: function (size, title, msg) {
        var modalInstance = $modal.open({
          templateUrl: 'views/confirmModal.html',
          controller: 'ModalCtrl as ctrl',
          size: size,
          resolve: {
            title: function () {
              return title;
            },
            msg: function () {
              return msg;
            }
          }
        });
        return modalInstance.result;
      },

      project: function (size, title, msg) {
        var modalInstance = $modal.open({
          templateUrl: 'views/projectModal.html',
          controller: 'ModalCtrl as ctrl',
          size: size,
          resolve: {
            title: function () {
              return title;
            },
            msg: function () {
              return msg;
            }
          }
        });
        return modalInstance.result;
      }
    }

  }]);