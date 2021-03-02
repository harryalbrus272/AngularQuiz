let app = angular.module("app1", []);
app.controller("main-controller", function ($scope, $interval) {
  $scope.questions = [
    {
      id: 1,
      ques: " How can we describe an array in the best possible way1? ",
      opt1: " The Array shows a hierarchical structure. ",
      opt2: " Arrays are immutable. ",
      opt3: " Container that stores the elements of similar types ",
      opt4: " The Array is not a data structure ",
    },
    {
      id: 2,
      ques:
        " Which of the following is the correct way of declaring an array? ",
      opt1: " int javatpoint[10]; ",
      opt2: " int javatpoint; ",
      opt3: " javatpoint{20}; ",
      opt4: " array javatpoint[10]; ",
    },
    {
      id: 3,
      ques: " How can we initialize an array in C language? ",
      opt1: " int arr[2]=(10, 20) ",
      opt2: " int arr(2)={10, 20} ",
      opt3: " int arr[2] = {10, 20} ",
      opt4: " int arr(2) = (10, 20) ",
    },
    {
      id: 4,
      ques:
        " Which of the following is the advantage of the array data structure? ",
      opt1: " Elements of mixed data types can be stored. ",
      opt2: " Easier to access the elements in an array ",
      opt3: " Index of the first element starts from 1. ",
      opt4: " Elements of an array cannot be sorted ",
    },
    {
      id: 5,
      ques: " Which of the following highly uses the concept of an array? ",
      opt1: " Binary Search tree ",
      opt2: " Caching ",
      opt3: " Spatial locality ",
      opt4: " Scheduling of Processes ",
    },
    {
      id: 6,
      ques: " Which of the following is the disadvantage of the array? ",
      opt1:
        " Stack and Queue data structures can be implemented through an array. ",
      opt2: " Index of the first element in an array can be negative ",
      opt3:
        " Wastage of memory if the elements inserted in an array are lesser than the allocated size ",
      opt4: " Elements can be accessed sequentially. ",
    },
    {
      id: 7,
      ques:
        " Which one of the following is the size of int arr[9] assuming that int is of 4 bytes? ",
      opt1: " 9 ",
      opt2: " 36 ",
      opt3: " 36 ",
      opt4: " None of These ",
    },
    {
      id: 8,
      ques:
        " Which one of the following is the process of inserting an element in the stack? ",
      opt1: " Insert ",
      opt2: " Add ",
      opt3: " Push ",
      opt4: " None of These ",
    },
    {
      id: 9,
      ques:
        " When the user tries to delete the element from the empty stack then the condition is said to be a ____ ",
      opt1: " Underflow ",
      opt2: " Garbage Collection ",
      opt3: " Overflow ",
      opt4: " None of These ",
    },
    {
      id: 10,
      ques:
        " If the size of the stack is 10 and we try to add the 11th element in the stack then the condition is known as___ ",
      opt1: " Underflow ",
      opt2: " Garbage Collection ",
      opt3: " Overflow ",
      opt4: " None of These ",
    },
  ];
  $scope.time = 200;
  $scope.QuestionVisible = true;
  $scope.resultArray = Array($scope.questions.length).fill("");
  $scope.currentQuestion = $scope.questions[0];
  $scope.currentQuestionNumber = 1;
  $scope.rightEnable = true;
  $scope.leftEnable = false;

  const decreaseCounter = function () {
    $scope.time -= 1;
    if ($scope.time == 0) {
      $scope.cancelTimerInterval();
    }
  };
  let counterPromise = $interval(decreaseCounter, 1000);
  $scope.cancelTimerInterval = function () {
    $interval.cancel(counterPromise);
    $scope.time = "Ended!";
    $scope.QuestionVisible = false;
    $scope.resultJSON = {answers:$scope.resultArray};

  };

  $scope.printMessage = function () {
    $scope.time = 0;
    $scope.cancelTimerInterval();
  };

  $scope.test = "Hello World!";

  $scope.range = function (min, max, step) {
    step = step || 1;
    let input = [];
    for (let i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  };

  $scope.changeCurrentQuestion = function (event) {
    let newQuestionNumber = parseInt(event.target.id);
    $scope.currentQuestion = $scope.questions[newQuestionNumber - 1];
    $scope.currentQuestionNumber = newQuestionNumber;
    $scope.checkEnabledButtons();
    $scope.checkOptionEnabled();
  };

  $scope.increment = function (event) {
    $scope.currentQuestionNumber += 1;
    $scope.currentQuestion = $scope.questions[$scope.currentQuestionNumber - 1];
    $scope.checkEnabledButtons();
    $scope.checkOptionEnabled();
  };

  $scope.decrement = function (event) {
    $scope.currentQuestionNumber -= 1;
    $scope.currentQuestion = $scope.questions[$scope.currentQuestionNumber - 1];
    $scope.checkEnabledButtons();
    $scope.checkOptionEnabled();
  };
  $scope.checkEnabledButtons = () => {
    if ($scope.currentQuestionNumber === 10) {
      $scope.rightEnable = false;
    } else if ($scope.currentQuestionNumber === 1) {
      $scope.leftEnable = false;
    } else {
      $scope.rightEnable = true;
      $scope.leftEnable = true;
    }
  };
  $scope.checkOptionEnabled = () => {
    if ($scope.resultArray[$scope.currentQuestionNumber - 1] !== "") {
      $scope.currentChecked =
        $scope.resultArray[$scope.currentQuestionNumber - 1];
    } else {
      $scope.currentChecked = "e";
    }
  };

  $scope.checkEnabledButtons();

  $scope.addData = function (event) {
    $scope.resultArray[$scope.currentQuestionNumber - 1] = event.target.id;
  };
});
