
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

### Use Cases

- Web applications
- Mobile backends
- CRUD-based systems
### Pros / cons

**Pros**
- Simple to understand
- Easy to debug
**Cons**
- Server can become a bottleneck
- Tight coupling

Core Communication Patterns

- **Request-Response**  
    This is the most common and fundamental pattern, used in most web applications (e.g., HTTP/HTTPS).
    - The client sends a request to the server and **waits** for a response.
    - The server processes the request and sends the response back.
    - This is typically a **synchronous** pattern, meaning the client is blocked until it gets a reply, though implementation can be asynchronous.
- **Remote Procedure Call (RPC)**  
    RPC enables a client to execute a procedure or function on a remote server as if it were a local function call.
    - The client issues a function call, which is translated into a message and sent over the network to the server.
    - The server executes the function and sends the result back to the client.
    - Protocols like gRPC and SOAP use this method.
- **Publish-Subscribe (Pub/Sub)**  
    This is an **asynchronous** pattern used for event-driven systems where direct communication between parties is not required.
    - Clients subscribe to specific "topics" or events through a message broker.
    - When a publisher (which could be the server or another client) has a message related to that topic, it sends it to the broker.
    - The broker then pushes the message to all interested subscribers.
    - This is ideal for real-time notifications, chat apps, and microservices communication. 

Real-Time & Ongoing Communication Methods

For scenarios requiring continuous or real-time data flow, variations of the core patterns are used:

- **Polling**  
    The client repeatedly asks the server for updates at regular, short intervals.
    - This method is simple to implement but inefficient, as most requests return no new data, creating unnecessary network overhead.
- **Long Polling**  
    An improvement over standard polling where the server holds the client's request open until new data is available or a timeout occurs. Once data is sent, the client immediately sends a new request to wait for the next update.
- **WebSockets**  
    This method establishes a persistent, **full-duplex** (two-way) communication channel over a single TCP connection.
    - Once the connection is established (via a handshake process), both the client and the server can send data to each other at any time, making it highly efficient for real-time applications like online gaming or collaborative editing.
- **Server-Sent Events (SSE)**  
    SSE enables **one-way** communication where the server pushes updates to the client over a persistent HTTP connection.
    - It is simpler than WebSockets for server-to-client data flow (e.g., stock price updates, news feeds) but does not allow the client to send data back over the same channel. 

Underlying Mechanisms and Protocols

These patterns often utilize lower-level mechanisms and protocols to function:

- **Sockets:** Sockets provide the endpoints for communication, allowing processes on the same or different machines to exchange unstructured data streams using IP addresses and port numbers. Most other methods are built on top of this.
- **Protocols:** Standardized rules govern the data exchange. Examples include HTTP/HTTPS, TCP/IP, FTP (File Transfer Protocol), and SMTP (Simple Mail Transfer Protocol) for email.