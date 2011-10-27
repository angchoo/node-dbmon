/** Dbmon channel defaults */
var d={
  /** Database driver to use; postgresql8, postgresql9, mysql, oracle, etc...
      REQUIRED */
  driver: null,
  /** Driver dedicated opts */
  driverOpts:{
    postgresql:{
      /** connected client, REQUIRED */
      cli:null
    }
  },

  /** Table to monitor for changes,
      REQUIRED */
  table: null,
  /** Informazioni sul campo chiave da restituire nelle notifiche con il valore inserito/modificato/eliminato */
  keyfld:{
    /** Key Field Name, ie: 'id' */
    name:null,
    /** Key Field Type, ie: 'integer', or 'varchar(100)', etc.. */
    type:null
  },

  /** What to monitor, comma separated list of insert,update,delete or all */
  monitor: 'all',

  /** Type of monitor, trigger or polling */
  method: 'trigger',
  /** Options dedicated to method types */
  methodOpts:{
    trigger:{},
    polling:{}
  },

  /** Comma separated list of transports, console, eventEmitter, tcp, faye, hookio, redis, etc.. */
  transports: 'console',
  transportsOpts:{
    eventEmitter:{
      /** if transports contains eventEmitter, this is REQUIRED */
      eventEmitter:null
    },
    faye:{
      /** Can be an http server object or an express object, if null faye initialize a
          it's own http server communicating on specified port */
      server:null,
      port:8000,
      /** Faye mount and timeout, see: http://faye.jcoglan.com/node.html */
      mount:'/faye',
      timeout: 45,
      /** Channel to publish updates on; _TYPE_ is replaced at runtime with insert/update/delete based on type of update */
      channel:'/dbmon'
    }
  },

  /** Debounce notification support, avoid server and listeners overload on frequest updates */
  debouncedNotifications:100
};

module.exports={channelDefaults:d};