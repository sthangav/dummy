(function() {
  loadOptions();
  submitHandler();
})();

function submitHandler() {
  var $submitButton = $('#submitButton');

  $submitButton.on('click', function() {
    console.log('Submit');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
  });
}

function loadOptions() {
  var $backgroundColorPicker = $('#backgroundColorPicker');
  var $backgroundColorPicker1 = $('#backgroundColorPicker1');
  var $backgroundColorPicker2 = $('#backgroundColorPicker2');
  var $backgroundColorPicker3 = $('#backgroundColorPicker3');


  var $timeFormatCheckbox = $('#timeFormatCheckbox');

  if (localStorage.backgroundColor) {
    $backgroundColorPicker[0].value = localStorage.backgroundColor;
       $backgroundColorPicker1[0].value = localStorage.backgroundColor1; 
       $backgroundColorPicker2[0].value = localStorage.backgroundColor2; 
       $backgroundColorPicker3[0].value = localStorage.backgroundColor3; 
    $timeFormatCheckbox[0].checked = localStorage.twentyFourHourFormat === 'true';
  }

}

function getAndStoreConfigData() {
  var $backgroundColorPicker = $('#backgroundColorPicker');
  var $backgroundColorPicker1 = $('#backgroundColorPicker1');
  var $timeFormatCheckbox = $('#timeFormatCheckbox');

  var options = {
    backgroundColor: $backgroundColorPicker.val(),
    backgroundColor1: $backgroundColorPicker1.val(),
    backgroundColor2: $backgroundColorPicker2.val(),
    backgroundColor3: $backgroundColorPicker3.val(),

    twentyFourHourFormat: $timeFormatCheckbox[0].checked
  };

  localStorage.backgroundColor = options.backgroundColor;
  localStorage.backgroundColor1 = options.backgroundColor1;
  localStorage.backgroundColor2 = options.backgroundColor2;
  localStorage.backgroundColor3 = options.backgroundColor3;

  localStorage.twentyFourHourFormat = options.twentyFourHourFormat;

  console.log('Got options: ' + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
