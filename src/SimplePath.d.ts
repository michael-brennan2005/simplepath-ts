declare enum ErrorType {
	LimitReached = "LimitReached",
	TargetUnreachable = "TargetUnreachable",
	ComputationError = "ComputationError",
	AgentStuck = "AgentStuck"
}

declare enum StatusType {
	Idle = "Idle",
	Active = "Active"
}

interface Path {
	Visualize: boolean
	Status: StatusType
	LastError: ErrorType
	Run(target: Vector3 | BasePart): boolean
	Stop(): void
	Destroy(): void
	Reached: RBXScriptSignal<(agent: Model, finalWaypoint: PathWaypoint) => void>
	WaypointReached: RBXScriptSignal<(agent: Model, last: PathWaypoint, next: PathWaypoint) => void>
	Blocked: RBXScriptSignal<(agent: Model, blocked: PathWaypoint) => void>
	Error: RBXScriptSignal<(error: ErrorType & string) => void>
	Stopped: RBXScriptSignal<(agent: Model) => void>
}

interface PathConstructor {
	new (agent: Model, agentParameters?: {}, override?: {}): Path
	GetNearestCharacter(fromPosition: Vector3): Model | undefined
}

declare const Path: PathConstructor
export = Path