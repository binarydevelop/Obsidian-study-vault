## Client–Server Architecture

![Image](https://substackcdn.com/image/fetch/%24s_%21g3db%21%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4a38175b-11e8-40ae-879c-ab3ce2027089_2008x1252.png?utm_source=chatgpt.com)


- **Client–server architecture** is a distributed computing model in which functionality is split between **clients** (requesters of services) and **servers** (providers of services). 
---

### Core Components

1. **Client**
    - Initiates requests for data or services.
    - Typically handles user interaction and presentation logic.
    - Examples: web browsers, mobile apps, desktop applications.
2. **Server**
    - Listens for and processes client requests.
    - Manages resources such as databases, files, or business logic.
    - Examples: web servers (Apache, Nginx), application servers, database servers.
    - Read more about servers: [[Servers]]
3. **Network**
    - The communication medium (LAN, WAN, Internet).
    - Requests and responses are exchanged using protocols like HTTP/HTTPS, TCP/IP.
        

---

### Communication Model

- **Request–Response** pattern:
    1. Client sends a request (e.g., HTTP GET). 
    2. Server processes the request.
    3. Server sends a response (data, status code, result).
- Communication can be **stateless** (e.g., HTTP) or **stateful** depending on the protocol and application design.
- [[Stateful and stateless]]

---

### Architectural Tiers

1. **Two-Tier Architecture**
    
    - Client communicates directly with the server (often a database).
        
    - Simple to implement, limited scalability.
        
    - Common in small or legacy systems.
        
2. **Three-Tier Architecture**
    
    - **Presentation tier**: Client (UI).
        
    - **Application tier**: Business logic server.
        
    - **Data tier**: Database server.
        
    - Improves scalability, security, and maintainability.
        
3. **N-Tier (Multi-Tier) Architecture**
    
    - Extends three-tier by adding services such as caching, authentication, or microservices.
        
    - Common in large-scale enterprise and cloud systems.
        

---

### Advantages

- **Centralized management** of data and logic.
    
- **Scalability**: servers can be upgraded or replicated independently.
    
- **Security**: sensitive data resides on servers, not clients.
    
- **Maintainability**: easier updates and bug fixes on the server side.
    

---

### Disadvantages

- **Single point of failure** if servers are not redundant.
    
- **Network dependency**: performance relies on network quality.
    
- **Server load** can become a bottleneck without proper scaling.
    

---

### Common Use Cases

- Web applications (browser ↔ web server).
    
- Email systems (mail client ↔ mail server).
    
- Online banking and e-commerce platforms.
    
- Enterprise information systems.
    

---

### Summary

Client–server architecture structures systems around service providers and service consumers. By separating concerns and centralizing resources, it supports scalable, secure, and maintainable applications, which is why it remains the dominant model for modern networked software systems.