cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oOrderdate]
    }
  },
  
  dimensions: {
    oTotalprice: {
      sql: `o_totalprice`,
      type: `string`
    },
    
    oComment: {
      sql: `o_comment`,
      type: `string`
    },
    
    oOrderstatus: {
      sql: `o_orderstatus`,
      type: `string`
    },
    
    oOrderpriority: {
      sql: `o_orderpriority`,
      type: `string`
    },
    
    oClerk: {
      sql: `o_clerk`,
      type: `string`
    },
    
    oOrderdate: {
      sql: `o_orderdate`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
