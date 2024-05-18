<img alt="Calm Plan Logo" width=150pz src="https://github.com/large-bytes/CalmPlan/assets/19231569/2f5874f0-28c3-4af8-ad97-76e90d3489f2" />

# CalmPlan

Make a task list and prioritise your work without getting overwhelmed.

## Features

### Home: Task cloud
- All tasks sized based on importance 
- Button to add a task goes to page with last 5 items
- Can add priority with facial expression meter emojis

### Task Priority Revaluate 
- Run through each task and vote for priority

### Task page
- Click on any task for its own page
- Title
- Details
- Priority

### Adding tasks
- List that only shows your last 5 entries
- Other tasks held in memory

### Prioritising tasks
- Click a button to prioritise tasks
- One task shown at a time like TypeForm
- Descriptive priority; with face emotion emojis
- When complete show tasks like a word cloud with most important larger and more more colourful

### Login/signup page
- If not logged in, any page sends you here
- Email address is all that’s required 
- Maybe no password only send login link
- Login token lasts for 1 week?

### API 
#### User
- Email PK

#### Task
- Id PK
- Title
- Details
- Priority
- UserEmail FK

#### Tasks Table (JOIN TABLE)
- UserEmail - TaskId


