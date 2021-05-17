# tasks
Web panel for executing, configuring, and monitoring tasks.

### What are tasks?
Tasks are just temporary or persistent docker containers that run with some parameters. They can be triggered manually or automatically, and are wrapped nicely in an API burrito that helps with prechecks, displaying output while running (like last rendered frame, CI output, etc), status updates, and more.

### Types of tasks
| Type       | Description                                                                                                                                                                                                                                                     |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Persistent | A persistent task can be started and then enabled and disabled, without deleting any data. If a persistent task is disabled, the docker container is stopped but the storage persists.                                                                          |
| Job        | A job task is run once and then is deleted when stopped or exiting.                                                                                                                                                                                             |
| Meta       | A meta task is a job task with elevated permissions. They can only be triggered by those with a role with the `ADMINISTRATOR` permission. These tasks typically run things relating to the tasks program itself, such as updating, making an announcement, etc. |