# Roles and Permissions
## Roles
Roles should be able to be configured from the `config/roles.yml` file. Each role has a name, and a color, and a user may have more than one of them.
Roles can have many different permissions.

## Permissions
Each permission represents a specific action. If you do not have permission to do that action, you cannot do it. Permissions cannot be attached to users, but can be attached to Task Groups and Roles.

## Special Permissions
### Administrator Permission
The `ADMINISTRATOR` permission includes all permissions, except for the `OPERATOR` permission.

### Operator Permission
The `OPERATOR` permission allows users who have it to manage `meta` tasks (see TASKS.md), such as updating the system, deleting resources, etc. It inherits the `ADMINISTRATOR` permission.

## All Permissions
| Name | Description |
| - | - |
| `CREATE_TASK` | Ability to create tasks. |
| `VIEW_TASK` | Ability to view tasks. |
| `VIEW_ALL_TASKS` | Ability to view tasks that they are not the owners of |
| `MANAGE_TASK` | Ability to manage their tasks. |
| `MANAGE_ALL_TASKS` | Ability to manage all tasks. |
| `TASK_GROUPS` | Create and manage task groups. |
| *more soon* |