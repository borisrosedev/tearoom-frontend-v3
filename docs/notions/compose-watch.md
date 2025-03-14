# The watch attribute 

The watch attribute automatically updates and previews your running Compose services as you edit and save your code. 


For many projects, this enables a hands-off development workflow once Compose is running, as services automatically update themselves when you save your work.


## Watch Rules

watch adheres to the following file path rules:

- All paths are relative to the project directory, apart from ignore file patterns
- Directories are watched recursively
- Glob patterns aren't supported
- Rules from .dockerignore apply
- Use ignore option to define additional paths to be ignored (same syntax)
- Temporary/backup files for common IDEs (Vim, Emacs, JetBrains, & more) are ignored automatically
- .git directories are ignored automatically


## Prerequisites
In order to work properly, watch relies on common executables. Make sure your service image contains the following binaries:

- stat
- mkdir
- rmdir

watch also requires that the container's USER can write to the target path so it can update files. 


##

A common pattern is for initial content to be copied into the container using the COPY instruction in a Dockerfile. To ensure such files are owned by the configured user, use the COPY --chown flag: