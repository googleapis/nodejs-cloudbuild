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

function main(parent, workerPool, workerPoolId) {
  // [START cloudbuild_v1_generated_CloudBuild_CreateWorkerPool_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource where this worker pool will be created.
   *  Format: `projects/{project}/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. `WorkerPool` resource to create.
   */
  // const workerPool = {}
  /**
   *  Required. Immutable. The ID to use for the `WorkerPool`, which will become
   *  the final component of the resource name.
   *  This value should be 1-63 characters, and valid characters
   *  are /[a-z][0-9]-/.
   */
  // const workerPoolId = 'abc123'
  /**
   *  If set, validate the request and preview the response, but do not actually
   *  post it.
   */
  // const validateOnly = true

  // Imports the Cloudbuild library
  const {CloudBuildClient} = require('@google-cloud/cloudbuild').v1;

  // Instantiates a client
  const cloudbuildClient = new CloudBuildClient();

  async function callCreateWorkerPool() {
    // Construct request
    const request = {
      parent,
      workerPool,
      workerPoolId,
    };

    // Run request
    const [operation] = await cloudbuildClient.createWorkerPool(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateWorkerPool();
  // [END cloudbuild_v1_generated_CloudBuild_CreateWorkerPool_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));