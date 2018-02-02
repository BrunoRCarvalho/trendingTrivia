angular
  .module("app")
  .controller("questionCtrl", function($scope, questionService) {
    $scope.modal = document.getElementsByClassName("modal")[0];
    $scope.add = document.getElementById("add");
    $scope.close = document.getElementsByClassName("close")[0];

    $scope.addOnClick = function addOnClick() {
      $scope.modal.style.display = "flex";
    };

    $scope.closeOnClick = function closeOnClick() {
      $scope.modal.style.display = "none";
    };
    $scope.question = {
      question: "",
      animal: "",
      difficulty: null,
      options: {
        1: "",
        2: "",
        3: "",
        4: ""
      },
      correct_answer: null,
      date_entered: null
    };

    $scope.addName = function addName(val) {
      return ($scope.question.question = val);
    };

    $scope.addAnimal = function addAnimal(val) {
      return ($scope.question.animal = val);
    };
    $scope.addDiff = function addDiff(val) {
      return ($scope.question.difficulty = val);
    };
    $scope.addOption1 = function addOption1(val) {
      return ($scope.question.options["1"] = val);
    };
    $scope.addOption2 = function addOption2(val) {
      return ($scope.question.options["2"] = val);
    };
    $scope.addOption3 = function addOption3(val) {
      return ($scope.question.options["3"] = val);
    };
    $scope.addOption4 = function addOption4(val) {
      return ($scope.question.options["4"] = val);
    };
    $scope.rightOption = function rightOption(val) {
      return ($scope.question.correct_answer = val);
    };

    $scope.getAllQuestions = function() {
      questionService.getAllQuestions().then(function(res) {
        $scope.questions = res;
      });
    };

    $scope.saveQuestion = function saveQuestion(correct_answer) {
      $scope.question.date_entered = new Date();
      $scope.question.correct_answer = parseInt(correct_answer, 10);
      questionService.createQuestion($scope.question);
    };
  });
