interface GameControlsProps {
  isDrawer: boolean;
  onDrawerToggle: () => void;
  team: 'A' | 'B';
  onTeamChange: (team: 'A' | 'B') => void;
}

export default function GameControls({
  isDrawer,
  onDrawerToggle,
  team,
  onTeamChange,
}: GameControlsProps) {
  return (
    <div className="flex items-center justify-between rounded bg-white p-4 shadow-sm">
      <div className="space-x-3">
        <label className="text-sm">
          <input type="checkbox" checked={isDrawer} onChange={onDrawerToggle} className="mr-1" />
          Drawer mode
        </label>

        <select
          value={team}
          onChange={(e) => onTeamChange(e.target.value as 'A' | 'B')}
          className="rounded border px-2 py-1 text-sm"
        >
          <option value="A">Team A</option>
          <option value="B">Team B</option>
        </select>
      </div>
    </div>
  );
}
