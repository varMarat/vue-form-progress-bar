export default{
  generalInformation:[
    { 
      id: 1,
      label:'Имя',
      type: 'text',
      required: true,
      name:'name'
    },
    { 
      id: 2,
      label:'email',
      type: 'email',
      required: true,
      name: 'email'
    },
    { 
      id: 3,
      label:'password',
      type: 'password',
      required: true,
      name: 'password',
    },
    { 
      id: 4,
      label:'Дата рождения*',
      type: 'text',
      required: false,
      name:'birthday'
    },
    { 
      id: 5,
      label:'Номер телефона',
      type: 'text',
      required: false,
      name:'phone'
    },
    { 
      id: 6,
      label:'Пол',
      type: 'text',
      required: false,
      name: 'sex'
    },
    { 
      id: 7,
      label:'Группа клиентов',
      type: 'text',
      required: false,
      name: 'clients' 
    },
    { 
      id: 8,
      label:'Лечащий врач',
      type: 'text',
      required: false,
      name: 'doctor'
    }
  ],
  address:[
    { 
      id: 1,
      label:'test1',
      type: 'text',
      required: false,
      name:'test1'
    },
    { 
      id: 1,
      label:'test2',
      type: 'text',
      required: false,
      name:'test2'
    },
    { 
      id: 1,
      label:'test3',
      type: 'text',
      required: false,
      name:'test3'
    }
  ],
  documentType:[
    { 
      id: 1,
      label:'test1.1',
      type: 'text',
      required: false,
      name:'test1.1'
    },
    { 
      id: 1,
      label:'test2.1',
      type: 'text',
      required: false,
      name:'test2.1'
    },
    { 
      id: 1,
      label:'test3.1',
      type: 'text',
      required: false,
      name:'test3.1'
    }
  ]
}