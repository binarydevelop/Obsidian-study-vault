
**Tags:** #pattern/client-server #architecture #http #backend-basics

### Concept

A **client** initiates requests and a **server** processes them and returns responses. Communication is usually **synchronous**.

### Characteristics

- Request–response model
- Centralized control
- Stateless (in HTTP-based systems)
### Common Technologies

- HTTP/HTTPS
- TCP/IP
- Web Servers (Nginx, Apache)
- App Servers (Spring Boot, Express)
### Mermaid Diagram


```mermaid
sequenceDiagram  
participant Client
participant Server 
Client->>Server: Request  
Server-->>Client: Response
 ```

