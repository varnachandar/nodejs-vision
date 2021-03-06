/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const path = require('path');
const {assert} = require('chai');
const execa = require('execa');

const exec = async cmd => (await execa.shell(cmd)).stdout;
const cmd = `node faceDetection.js`;
const inputFile = path.join(__dirname, '../resources', 'face.png');
const outputFile = path.join(__dirname, '../../', 'out.png');

describe(`face detection`, () => {
  it(`should detect faces`, async () => {
    const output = await exec(`${cmd} ${inputFile} ${outputFile}`);
    assert.match(output, /Found 1 face/);
    assert.match(output, /Highlighting.../);
    assert.match(output, /Finished!/);
  });
});
