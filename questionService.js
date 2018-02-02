angular.module("app").service("questionService", function($http) {
  this.createQuestion = function(question) {
    return $http({
      method: "POST",
      url: "https://practiceapi.devmountain.com/api/trivia/questions",
      data: question
    }).then(function(res) {
      return res.data;
    });
  };
  this.getAllQuestions = function() {
    return $http({
      method: "GET",
      url: "https://practiceapi.devmountain.com/api/trivia/questions"
    }).then(function(res) {
      return res.data;
    });
  };
});
