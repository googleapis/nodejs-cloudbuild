// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(projectId, triggerId) {
  // [START cloudbuild_run_build_trigger_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the `Trigger` to run.
   *  Format: `projects/{project}/locations/{location}/triggers/{trigger}`
   */
  // const name = 'abc123'
  /**
   *  Required. ID of the project.
   */
  // const projectId = 'abc123'
  /**
   *  Required. ID of the trigger.
   */
  // const triggerId = 'abc123'
  /**
   *  Source to build against this trigger.
   */
  // const source = ''

  // Imports the Cloudbuild library
  const {CloudBuildClient} = require('@google-cloud/cloudbuild').v1;

  // Instantiates a client
  const cloudbuildClient = new CloudBuildClient();

  async function runBuildTrigger() {
    // Construct request
    const request = {
      projectId,
      triggerId,
    };

    // Run request
    const [operation] = await cloudbuildClient.runBuildTrigger(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  runBuildTrigger();
  // [END cloudbuild_run_build_trigger_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
