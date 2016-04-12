import gulp from 'gulp';
import template from 'gulp-template';
import rename from 'gulp-rename';
import inquirer from 'inquirer';
import path from 'path';

const questions = [
  {
    name: 'module',
    message: 'Module\'s name?',
    validate: isEmpty
  },
  {
    name: 'templates',
    message: 'Which templates do you want to generate for this module?',
    type: 'checkbox',
    choices: [
      'actions',
      'component',
      'container',
      'reducer',
      'sagas',
      'selectors'
    ]
  },
  {
    name: 'moveon',
    message: 'Go?',
    type: 'confirm'
  }
];

const tests = [
  'actions'
]

function isEmpty (answer) {

  return answer.replace(/ /g, '') !== '';

}

function addTest (module, t) {

  let src = path.join(__dirname, 'templates', 'test.js');

  gulp.src(src)
    .pipe(rename({
      basename: t
    }))
    .pipe(gulp.dest(`./test/${module}/`))

}

export default (done) => {

  inquirer.prompt(questions, function (answers) {

    if (!answers.moveon) return done();

    let module = answers.module.toLowerCase();

    // always create `index` and `constants`
    answers.templates.push('index', 'constants');

    // add `actionTypes` template if `actions` selected
    if (answers.templates.indexOf('actions') > -1) answers.templates.push('actionTypes');

    answers.templates.map(t => {

      let src = path.join(__dirname, 'templates', `${t}.js`);

      gulp.src(src)
        .pipe(template(answers, {
          interpolate: /<%=([\s\S]+?)%>/g
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest(`./universal/${module}/`))

      if (tests.indexOf(t) > -1) addTest(module, t)

    });

  });

}
