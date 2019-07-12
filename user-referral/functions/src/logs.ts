/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import config from "./config";

const obfuscatedConfig = {
  ...config,
  sendgridApiKey: "********",
};

export const complete = () => {
  console.log("Completed mod execution");
};

export const docPathFieldInvalid = (docPath: string, field: string) => {
  console.log(`DocPath: ${docPath} or field: '${field}' are invalid`);
};

export const docPathFieldsUpdated = () => {
  console.log("Updated docPath fields");
};

export const docPathFieldsUpdating = () => {
  console.log("Updating docPath fields");
};

export const docPathFieldUpdating = (
  docPath: string,
  field: string,
  userId: string
) => {
  console.log(
    `Updating docPath: '${docPath}' field: '${field}' for user: ${userId}`
  );
};

export const errorAcceptInvitation = (err: Error) => {
  console.error("Error when accepting invitation", err);
};

export const errorSendInvitation = (err: Error) => {
  console.error("Error when sending invitation", err);
};

export const init = () => {
  console.log("Initialising mod with configuration", obfuscatedConfig);
};

export const invitationCreated = (path: string, id: string) => {
  console.log(`Created invitation id: '${id}' in collection: '${path}'`);
};

export const invitationCreating = (path: string) => {
  console.log(`Creating invitation in collection: '${path}'`);
};

export const invitationDeleted = (invitationId: string) => {
  console.log(`Deleted invitation: '${invitationId}'`);
};

export const invitationDeleting = (invitationId: string) => {
  console.log(`Deleting invitation: '${invitationId}'`);
};

export const invitationDoesNotExist = (invitationId: string) => {
  console.log(`Invitation: '${invitationId}' does not exist`);
};

export const invitationLoaded = (invitationId: string) => {
  console.log(`Loaded invitation: '${invitationId}'`);
};

export const invitationLoading = (invitationId: string) => {
  console.log(`Loading invitation: '${invitationId}'`);
};

export const invitationSent = (acceptUrl: string) => {
  console.log(`Sent invitation with acceptUrl: '${acceptUrl}'`);
};

export const invitationSending = (acceptUrl: string) => {
  console.log(`Sending invitation with acceptUrl: '${acceptUrl}'`);
};

export const start = () => {
  console.log("Started mod execution with configuration", obfuscatedConfig);
};

export const userUnauthenticated = () => {
  console.warn("Unable to delete, the user is unauthenticated");
};