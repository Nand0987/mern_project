import "./goalcardstyle.css";

export default function GoalCard({ title, progress, deadline, createdBy, currentUser }) {
  return (
    <div className="goal-card">
      <h3>{title}</h3>
      <p><strong>Progress:</strong> {progress}%</p>
      <p><strong>Deadline:</strong> {deadline}</p>
      <p><strong>By:</strong> {createdBy}</p>

      <div className="progress-bar">
        <div
          className={`progress-fill ${progress === 100 ? "completed" : ""}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {progress === 100 && currentUser === createdBy && (
        <p className="completed-text">🎉 Completed!</p>
      )}
    </div>
  );
}
