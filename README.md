# Nx + Vite - ViteConf 2024 Demo

This is a demo for adding [Nx](https://nx.dev/) on a React-TS-Vite project, forked from the [React-Typescript-Vite Stackblitz starter project](https://developer.stackblitz.com/guides/user-guide/starter-projects).

## Adding Nx

Steps that I followed to set up Nx on this project:

1. `npx nx init` - to add Nx
2. `npx nx g ci-workflow` - to generate a new GitHub workflow file
3. Make a change - create a PR - see the action on GitHub and Nx Cloud

### Reading Material

- [Add Nx to your app](https://nx.dev/getting-started/installation#installing-nx-into-an-existing-repository)
- [Set up CI with Nx](https://nx.dev/ci/intro/ci-with-nx)

## Affected - never run the same code twice

Make a change to your project, create a PR, and Nx will only run tasks for the projects that were affected by your change.

### Only one project is affected

1. I added a new project project within this existing project:
    
    a. I ran `npm create vite`
  
    b. I let npm [and Nx](https://nx.dev/getting-started/tutorials/npm-workspaces-tutorial#npm-workspaces-tutorial) know using [`workspaces`](https://docs.npmjs.com/cli/v10/using-npm/workspaces)
2. I made a change to the new project and I created a PR
3. Nx only ran the tasks associated with the new project.

### Two projects are affected

A good opportunity to explore the [project graph](https://nx.dev/features/explore-graph#explore-the-project-graph).

1. I imported the new project in the existing project (see: [src/App.tsx](src/App.tsx)).
2. I ran `nx graph` to see the relationship between the two projects (existing project depends on new project)
3. I made a change to the new project and I created a PR.
4. Now, Nx ran the tasks associated with both the new and the existing projects.

### Reading material

- [Run Only Tasks Affected by a PR](https://nx.dev/ci/features/affected)

## Nx Cloud

See the tasks running on Nx Cloud. Observe how the tasks are distributed on different [agents](https://nx.dev/ci/features/distribute-task-execution) (machines) so that they can run in parallel.

## Useful Links

* [GitHub repo](https://github.com/mandarini/vite-conf-nx)
* [Example run on Nx Cloud](https://cloud.nx.app/runs/ehKYXfHqqd)
* [Example Nx GitHub action logs](https://github.com/mandarini/vite-conf-nx/actions/runs/10887956324/job/30211330649)
* [Nx Agents](https://nx.dev/ci/features/distribute-task-execution)
* [Nx.dev](https://nx.dev)
* [Nx.app](https://nx.app)
* [Nx on X](https://x.com/NxDevTools)
* [Katerina on X](https://x.com/psybercity)
* [Katerina on the web](https://psyber.city)

-----------------
_[@mandarini](https://github.com/mandarini)_ - _[@psybercity](https://x.com/psybercity)_ - _katerina skroumpelou_
