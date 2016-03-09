let fs = 0, source = 0,gm = 0,aspect = 0,widths = 0,height = 0,dest = 0;

//http://callbackhell.com/
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})

// ---------------------------------------------
// with promises
// ---------------------------------------------

fs.readdir(source).then(function (files, err) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    return files;
  }
}).then(function(files) {
  files.forEach(files, function (filename) {
    console.log(filename)
    return gm(source + filename).size();
  }).then(function (values) {
    console.log(filename);
    return {
      size: gm(source + filename).size(),
      filename: filename;
  }
  }).then(function (values, err) {
    if (err) {
      console.log('Error identifying file size: ' + err)
    } else {
      console.log(filename + ' : ' + values)
      aspect = (values.width / values.height)
      widths.forEach(function (width, widthIndex) {
        height = Math.round(width / aspect)
        console.log('resizing ' + filename + 'to ' + height + 'x' + height)
        this.resize(width, height).write(dest + 'w' + width + '_' + filename, function (err) {
          if (err) console.log('Error writing file: ' + err)
        })
      }.bind(this))
    }
  });
});

// ---------------------------------------------
// with first class functions
// ---------------------------------------------

function checkForFileErrorsAndForwardFiles(files, err) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    return files;
  }
}

function readFileSize(filename) {
  console.log(filename)
  return gm(source + filename).size();
}

function calculateAspect(values, err) {
  if (err) {
    console.log('Error identifying file size: ' + err)
  } else {
    console.log(filename + ' : ' + values)
    return (values.width / values.height)
  }
}

function resizeFile (width, widthIndex) {
  height = Math.round(width / aspect)
  console.log('resizing ' + filename + 'to ' + height + 'x' + height)
  resize(width, height).write(dest + 'w' + width + '_' + filename, function (err) {
    if (err) console.log('Error writing file: ' + err)
  })
}

fs.readdir(source)
  .then(checkForFileErrorsAndForwardFiles)
  .then(forEach(readFileSize)
    .then(calculateAspect)
    .then(forEach(widths)(resizeFile)));
