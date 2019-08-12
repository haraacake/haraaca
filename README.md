# Haraaca project tech stack

### FRONTEND

#### React.js (Building the interface)
- Next.js for server side rendering, routing and tooling
- Styled Components for styling & Tailwind css Utility Based Framework
- React-Apollo for interfacing with Apollo Client

### BACKEND

#### Apollo Client (For Data Management)
- Performing GraphQL Mutations
- Fetching GraphQL Queries
- Caching GraphQL Data
- Managing Local State
- Error and Loading UI States
( Apollo Client replaces the need for redux + data fetching/caching libraries )

#### GraphQL Yog (express GraphQL Server)
- Implementing **Query** and **Mutation Resolvers**
- Custom **Server Side Logic**
- Charging Credit Cards and Mpesa API
- Performing JWT Authentication
- Checking Permissions

#### Prisma (GraphQl Database Interface)
- Provides a set of GraphQL CRUD APIs for the Database (Postgres)
- Schema Definition
- Data Relationships
- Queried Directl from our Yoga server
- Self-hosted or SAAS