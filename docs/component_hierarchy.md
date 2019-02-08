# Component Hierarchy

**Homepage**
* NavBar
* UserSearchBar
* LogInForm

**AuthFormContainer**
* NavBar
* UserSearchBar
* LogInForm

**UserIndex**
* NavBar
* UserSearchBar
* Posts

**UserDetailContainer**
* NavBar
* UserSearchBar
* Posts



# Routes

| **Path**  | **Component** |
| ------------- | ------------- |
| '/'  | 'Homepage'  |
| '/login'  | 'AuthFormContainer'  |
| '/dashboard'  | 'UserIndex'  |
| '/:userId'  | 'UserDetailContainer'  |
