import { User } from "../types.ts";
import { formatDate } from "../utils.ts";

interface UserCardProps {
  user: User;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div class="user-card">
      <div class="flex justify-between">
        <div>
          <h3 class="font-semibold">{user.name}</h3>
          <p class="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <div class="task-card-meta mt-2">
        <div>
          <div>
            <span>Created:</span>
            {
              formatDate(user.createdAt)
            }
          </div>
          <div>
            <span>Updated:</span>
            {
              formatDate(user.updatedAt)
            }
          </div>
        </div>
      </div>

      <div class="flex gap-2 mt-2 w-full">
        {
        //Se añade el tipo de botón submit
        onEdit && (
          <button
            type = "submit"
            onClick={onEdit}
            class="btn btn-sm btn-secondary w-full"
            title="Edit user"
          >
            Edit
          </button>
        )}
        {
        //Se añade el tipo de botón submit
        onDelete && (
          <button
            type= "submit"
            onClick={onDelete}
            class="btn btn-sm btn-danger w-full"
            title="Delete user"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
