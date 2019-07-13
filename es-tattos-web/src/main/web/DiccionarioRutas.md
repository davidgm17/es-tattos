**Login**
_POST_ --> /auth/login

`User { mail: String; password: String; }`

**Usuario descripcion:**
_GET_ --> 'http://localhost:3000/user/details/:id'

`User { id: Number; userName: String; firstName: String; lastName: String; age: Number; email: String; photo: String(path); phone: Number; description: String; appointmentList: Appointment[]; eventList: Meeting[]; type: String; }`

`Appointment { id: Number; studioId: Number; studioName: String; applicantId: Number; applicantName: String; receiverId: Number; receiverName: String; date: Date; lastUpdate: Date; stateId: Number; mesage: String; }`

`Meeting { id: Number; userId: Number; userName: String; studioId: Number; studioName: String; date: Date; stateId: Number; description: String; }`

**Listar usuarios:**
_GET_ --> 'http://localhost:3000/users/'

`UserList[] { id: Number; firstName: String; lastName: String; photo: String(path); description: String; type: String; }`

**Listar tatuadores:**
_GET_ --> 'http://localhost:3000/artists/'

`UserList[] { id: Number; firstName: String; lastName: String; photo: String(path); description: String; type: String; }`

**Listar studios**
_GET_ --> 'http://localhost:3000/studios/'

`StudioList[] { id: Number; photo: String(path); description: String; title: String; }`

**Dame 1 estudio**
_GET_ --> 'http://localhost:3000/studio/details/:id'

`Studio { id: Number; photo: String(path); description: String; title: String; phone: Number; email: String; appointment: Boolean; appointmentList: Appointment[]; eventList: Meeting[]; }`

`Appointment { id: Number; studioId: Number; studioName: String; applicantId: Number; applicantName: String; receiverId: Number; receiverName: String; date: Date; lastUpdate: Date; stateId: Number; mesage: String; file: String; }`

`Meeting { id: Number; userId: Number; userName: String; studioId: Number; studioName: String; date: Date; stateId: Number; description: String; }`

**Guardar usuario nuevo:**
_PUT_ --> 'http://localhost:3000/user/details/'

`User { userName: String; firstName: String; lastName: String; password: String; age: Number; email: String; phone: Number; description: String; photo: (images) { path: String; tagName: String; uploadDate: Date; descrition: String; } }`

**Nueva cita para tatuajes:**
_PUT_ --> 'http://localhost:3000/meeting'

`Meeting { userId: Number; userName: String; studioId: Number; studioName: String; date: Date; stateId: Number; description: String; }`

**Nueva peticion de trabajo de un tatuador a un estudio:**  
_PUT_ --> 'http://localhost:3000/appointment/'

`Appointment { studioId: Number; studioName: String; applicantId: Number; applicantName: String; date: Date; lastUpdate: Date; stateId: Number; mesage: String; }`

**Nuevo evento-global:**
_PUT_ --> 'http://localhost:3000/events/add'

`GlobalEvent { title: String; date: Date; description: String; phone: Number; email: String; photo: (images) { path: String; tagName: String; uploadDate: Date; descrition: String; }}`

**Dame evento-global:**
_GET_ --> 'http://localhost:3000/events/details/:id'

`GlobalEvent { id: Number; photo: String(path); title: String; date: Date; description: String; phone: Number; email: String; }`

**Dame lista de eventos-global:**
_GET_ --> 'http://localhost:3000/events'

`GlobalEventList { id: Number; title: String; date: Date; description: String; photo: String(path) }`
