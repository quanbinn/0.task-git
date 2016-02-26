fs = require('fs')

// 1. get the file from the third prameter of command line
// 2. the file's path is in the same folder with the executed instructions by default
var ProcessedfileBefore = process.argv[2]; 
var Processedfile = ProcessedfileBefore;

fs.readFile(ProcessedfileBefore, 'utf8', function (err,data) {
  if (err) throw err;

  // step 1: change data to the string
  var interProcessing = data.toString();

  // step 2: replace REG number -> ### number
  // bug is here cannot get right result so use (/1. /g, '### 1. ') instead of (/1./g, '### 1.')
  var interProcessing = interProcessing.replace(/1. /g, '### 1. ');
  var interProcessing = interProcessing.replace(/2. /g, '### 2. ');
  var interProcessing = interProcessing.replace(/3. /g, '### 3. ');
  var interProcessing = interProcessing.replace(/4. /g, '### 4. ');
  var interProcessing = interProcessing.replace(/5. /g, '### 5. ');
  var interProcessing = interProcessing.replace(/6. /g, '### 6. ');
  var interProcessing = interProcessing.replace(/7. /g, '### 7. ');
  var interProcessing = interProcessing.replace(/8. /g, '### 8. ');
  var interProcessing = interProcessing.replace(/9. /g, '### 9. ');
  var interProcessing = interProcessing.replace(/10. /g, '### 10. ');
  var interProcessing = interProcessing.replace(/11. /g, '### 11. ');
  var interProcessing = interProcessing.replace(/12. /g, '### 12. ');
  var interProcessing = interProcessing.replace(/13. /g, '### 13. ');
  var interProcessing = interProcessing.replace(/14. /g, '### 14. ');
  var interProcessing = interProcessing.replace(/15. /g, '### 15. ');
  var interProcessing = interProcessing.replace(/16. /g, '### 16. ');
  var interProcessing = interProcessing.replace(/17. /g, '### 17. ');
  var interProcessing = interProcessing.replace(/18. /g, '### 18. ');
  var interProcessing = interProcessing.replace(/19. /g, '### 19. ');
  var interProcessing = interProcessing.replace(/20. /g, '### 20. ');
  var interProcessing = interProcessing.replace(/21. /g, '### 21. ');
  var interProcessing = interProcessing.replace(/22. /g, '### 22. ');
  var interProcessing = interProcessing.replace(/23. /g, '### 23. ');
  var interProcessing = interProcessing.replace(/24. /g, '### 24. ');
  var interProcessing = interProcessing.replace(/25. /g, '### 25. ');
  var interProcessing = interProcessing.replace(/26. /g, '### 26. ');
  var interProcessing = interProcessing.replace(/27. /g, '### 27. ');
  var interProcessing = interProcessing.replace(/28. /g, '### 28. ');
  var interProcessing = interProcessing.replace(/29. /g, '### 29. ');
  var interProcessing = interProcessing.replace(/30. /g, '### 30. ');

  // step 2.1: replace REG "你会看到" -> "#### 你会看到"
  var interProcessing = interProcessing.replace(/你会看到/g, '#### 你会看到');

  // step 2.2: replace REG "开始做" -> "## 开始做" 
  //           replace REG "下载并打开文件" -> "## 下载并打开文件"
  //           replace REG "继续做" -> "## 继续做" 
  var interProcessing = interProcessing.replace(/下载并打开文件/g, '## 下载并打开文件'); 
  var interProcessing = interProcessing.replace(/开始做/g, '## 开始做');  
  var interProcessing = interProcessing.replace(/继续做/g, '## 继续做');  

  console.log("replace all the symbols");

  // step 3: put the process string into buffer and assign to writeString
  var writeString = new Buffer(interProcessing);

  // step 4: write to the new file 
  fs.writeFile(Processedfile, writeString, function (err) {
    if (err) return console.log(err);
    console.log('finished the regex repace of the file');
  });
});