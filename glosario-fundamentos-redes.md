# 🌐 Glosario de Fundamentos de Redes y Protocolos de Comunicación
### Conceptos esenciales para comprender los modelos OSI y TCP/IP

---

# 1. Fundamentos de redes

### 🌐 Red informática (Network)
Es un conjunto de dispositivos conectados entre sí que pueden intercambiar información y compartir recursos.

**Ejemplo:** Los computadores de una universidad conectados para compartir archivos, impresoras y acceso a Internet.

### 💻 Host
Es cualquier dispositivo conectado a una red que puede enviar o recibir información.

**Ejemplos:** Un computador, un servidor, un celular o una impresora de red.

### 🖥️ Cliente (Client)
Es un dispositivo o programa que solicita un servicio o información a otro dispositivo.

**Ejemplo:** Cuando abres Google desde tu navegador, tu navegador actúa como cliente.

### 🗄️ Servidor (Server)
Es un dispositivo o programa que proporciona servicios o recursos a otros dispositivos.

**Ejemplo:** Cuando visitas una página web, un servidor puede entregarte los archivos necesarios para visualizarla.

### 🔌 ISP (Internet Service Provider)
Significa *Internet Service Provider*. Es una empresa que proporciona acceso a Internet.

**Ejemplos:** Claro, Movistar y Tigo.

### 🌍 Internet
Es una enorme red mundial formada por miles de redes interconectadas que permiten intercambiar información.

**Dato importante:** Internet no pertenece a una sola empresa. Es una infraestructura global de redes independientes que colaboran para comunicarse.

### 📡 Protocolo (Protocol)
Es un conjunto de reglas y acuerdos que establece cómo deben comunicarse los dispositivos o programas.

**Analogía:** Es como un idioma con reglas gramaticales. Si dos personas no comparten un idioma, tendrán dificultades para entenderse.

**Ejemplos:** HTTP, TCP, IP, FTP y SMTP.

### 🔄 Comunicación cliente-servidor
Es un modelo de comunicación donde un cliente realiza una solicitud y un servidor proporciona una respuesta.

**Ejemplo:** Tu navegador solicita una página web y el servidor devuelve su contenido.

---

# 2. Dispositivos de red

### 📶 Router (Enrutador)
Es un dispositivo que conecta diferentes redes y decide hacia dónde enviar los paquetes de información.

**Ejemplo:** El router de tu casa conecta tu red doméstica con la red de tu proveedor de Internet.

**Dato importante:** Los routers utilizan tablas de enrutamiento para determinar el siguiente destino de los paquetes.

### 🔀 Switch (Conmutador)
Es un dispositivo que conecta varios equipos dentro de una misma red local y permite que intercambien información.

**Ejemplo:** En una oficina, varios computadores pueden conectarse a un switch mediante cables Ethernet.

### 📡 Access Point (Punto de acceso)
Es un dispositivo que permite conectar equipos inalámbricos a una red mediante Wi-Fi.

---

# 3. Direccionamiento e identificación

### 🏷️ Dirección IP (Internet Protocol Address)
Es una dirección lógica que permite identificar una interfaz dentro de una red IP.

**Ejemplo IPv4:**
`192.168.1.10`

Existen dos versiones principales:

- IPv4: utiliza direcciones de 32 bits.
- IPv6: utiliza direcciones de 128 bits.

**Analogía:** Es como una dirección postal que permite identificar dónde debe entregarse la información.

### 🆔 Dirección MAC (Media Access Control)
Es un identificador asociado a una interfaz de red, utilizado en las comunicaciones de la capa de enlace.

**Ejemplo:**
`A4:5E:60:12:AB:CD`

**Diferencia importante:**
- IP: direccionamiento lógico entre redes.
- MAC: identificación utilizada para la comunicación dentro de un enlace de red.

### 🌍 Dominio (Domain Name)
Es un nombre legible que permite identificar un sitio o servicio en Internet.

**Ejemplo:** `google.com`.

### 🔎 DNS (Domain Name System)
Es un sistema que permite consultar qué dirección IP está asociada a un nombre de dominio.

**Ejemplo:** Cuando escribes `google.com`, tu dispositivo puede consultar DNS para encontrar la dirección IP correspondiente.

**Analogía:** Es como la agenda de contactos de tu celular: buscas un nombre y obtienes su número.

### 🚪 Puerto (Port)
Es un número que permite identificar un servicio o punto de comunicación dentro de un dispositivo.

**Ejemplos:**
- Puerto 80: HTTP.
- Puerto 443: HTTPS.
- Puerto 25: SMTP.
- Puerto 22: SSH.

**Importante:** Una dirección IP identifica una interfaz de red, mientras que un puerto permite identificar una aplicación o servicio de comunicación.

### 🎭 NAT (Network Address Translation)
Es un mecanismo que permite modificar direcciones IP en los paquetes que atraviesan un dispositivo de red.

**Ejemplo:** En una casa, varios dispositivos pueden compartir una misma dirección IPv4 pública mediante NAT.

---

# 4. Protocolos fundamentales

### 🌐 HTTP (Hypertext Transfer Protocol)
Es un protocolo de la capa de aplicación que define cómo un cliente y un servidor intercambian solicitudes y respuestas relacionadas con recursos web.

**Ejemplo:** Cuando tu navegador solicita una página web, utiliza HTTP para comunicarse con el servidor.

### 🔒 HTTPS (Hypertext Transfer Protocol Secure)
Es HTTP protegido mediante TLS, que proporciona cifrado y mecanismos de autenticación e integridad.

**Ejemplo:** Cuando ingresas a una página bancaria mediante HTTPS, la comunicación está protegida mediante cifrado.

### 🚚 FTP (File Transfer Protocol)
Es un protocolo utilizado para transferir archivos entre un cliente y un servidor.

### ✉️ SMTP (Simple Mail Transfer Protocol)
Es un protocolo utilizado para enviar correos electrónicos entre clientes y servidores o entre servidores de correo.

### 🚛 TCP (Transmission Control Protocol)
Es un protocolo de transporte que proporciona una comunicación confiable y ordenada entre aplicaciones.

Entre sus funciones están:

- Controlar la entrega de datos.
- Detectar pérdidas.
- Gestionar retransmisiones.
- Mantener el orden de los datos.
- Controlar el flujo de información.

**Analogía:** Es como un servicio de mensajería que confirma la entrega y organiza los paquetes para que lleguen correctamente.

### 📦 UDP (User Datagram Protocol)
Es un protocolo de transporte que permite enviar datos sin establecer una conexión previa ni garantizar su entrega u orden.

**Ejemplo:** Puede utilizarse en videojuegos en línea, videollamadas y transmisiones en tiempo real.

**Diferencia fundamental:**
- TCP: prioriza la entrega confiable y ordenada.
- UDP: permite transmitir con menos mecanismos de control.

### 🧭 IP (Internet Protocol)
Es un protocolo que permite direccionar y encaminar paquetes entre redes.

**Importante:** IP no garantiza que los paquetes lleguen a su destino ni que lleguen en orden.

### 📡 DHCP (Dynamic Host Configuration Protocol)
Es un protocolo que permite asignar automáticamente configuraciones de red a los dispositivos.

**Ejemplo:** Cuando conectas tu celular al Wi-Fi, normalmente recibe automáticamente una dirección IP mediante DHCP.

### 🔐 TLS (Transport Layer Security)
Es un protocolo criptográfico que proporciona seguridad a las comunicaciones mediante cifrado, autenticación e integridad.

**Ejemplo:** HTTPS utiliza TLS para proteger la comunicación web.

---

# 5. Conceptos sobre cómo viaja la información

### 📦 Paquete (Packet)
Es una unidad de datos utilizada en la comunicación de red. En el contexto de IP, contiene información de control y los datos que se transportan.

**Analogía:** Es como una caja que contiene información y los datos necesarios para dirigirla a su destino.

### 0️⃣ Bit
Es la unidad mínima de información digital. Puede representar un 0 o un 1.

### 🔗 Encapsulación (Encapsulation)
Es el proceso mediante el cual cada capa agrega información de control a los datos recibidos de la capa superior.

**Ejemplo simplificado:**

Datos → Segmento TCP → Paquete IP → Trama Ethernet → Bits.

### 🔓 Desencapsulación (Decapsulation)
Es el proceso inverso: cada capa recibe los datos, interpreta y retira la información de control que le corresponde para entregar el contenido a la capa superior.

### 📡 Ancho de banda (Bandwidth)
Es la capacidad de transmisión de una conexión durante un intervalo de tiempo.

Normalmente se mide en bits por segundo (bps).

**Ejemplo:** Una conexión de 300 Mbps tiene una capacidad nominal de transmisión de 300 millones de bits por segundo.

### 📉 Pérdida de paquetes (Packet Loss)
Sucede cuando algunos paquetes enviados no llegan correctamente a su destino.

**Ejemplo:** Puede provocar interrupciones o problemas en una videollamada.

### 🔄 Enrutamiento (Routing)
Es el proceso mediante el cual se determinan las rutas que deben seguir los paquetes para alcanzar otras redes.

### 🚦 Reenvío (Forwarding)
Es la acción que realiza un router al recibir un paquete y enviarlo por la interfaz correspondiente según su tabla de reenvío.

**Diferencia:**
- Routing: determina las rutas.
- Forwarding: envía los paquetes siguiendo esas decisiones.

---

# 6. Los modelos de comunicación

### 🧱 Modelo OSI
Es un modelo conceptual que organiza la comunicación en redes mediante siete capas.

Sus capas son:

| Número | Capa | Responsabilidad general |
|---|---|---|
| 7 | Aplicación | Servicios de comunicación para aplicaciones. |
| 6 | Presentación | Representación y transformación de datos. |
| 5 | Sesión | Gestión de sesiones de comunicación. |
| 4 | Transporte | Comunicación entre aplicaciones. |
| 3 | Red | Direccionamiento y enrutamiento. |
| 2 | Enlace de datos | Comunicación mediante tramas. |
| 1 | Física | Transmisión de señales y bits. |

### 🌐 Modelo TCP/IP
Es la arquitectura de comunicación utilizada como base de Internet.

Se suele representar mediante cuatro capas:

| Número | Capa | Ejemplos |
|---|---|---|
| 4 | Aplicación | HTTP, DNS, SMTP. |
| 3 | Transporte | TCP, UDP. |
| 2 | Internet | IP, ICMP. |
| 1 | Acceso a la red | Ethernet, Wi-Fi. |

### 🔍 Diferencia entre OSI y TCP/IP

- OSI: modelo de referencia que permite comprender y estudiar la comunicación en redes.
- TCP/IP: conjunto de protocolos y arquitectura que hace posible la comunicación en Internet.

---

# 🎯 Para recordar

No necesitas memorizar todos estos términos de inmediato. Lo importante es comprender cómo se relacionan.

- Los **dispositivos** permiten construir las redes.
- Las **direcciones** identifican interfaces y destinos.
- Los **protocolos** establecen las reglas de comunicación.
- Los **routers** permiten conectar diferentes redes.
- Los **paquetes** transportan información.
- El **modelo OSI** ayuda a entender cómo se organiza la comunicación.
- **TCP/IP** hace posible la comunicación entre aplicaciones a través de Internet.

**La idea principal:** Internet no es magia. Es un conjunto de tecnologías, dispositivos y protocolos trabajando juntos para que dos aplicaciones puedan comunicarse, aunque estén en extremos opuestos del mundo.
