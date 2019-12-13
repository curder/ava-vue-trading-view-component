<template>
  <div class="container mx-auto">
    <trading-view
      src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"
      :options="type1"
    ></trading-view>
    <trading-view
      src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
      :options="type2"
    ></trading-view>

    <trading-view
      src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
      :options="type3"
    ></trading-view>

    <trading-view
      src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
      :options="type4"
    ></trading-view>

    <trading-view
      src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
      :options="type5"
    >
    </trading-view>

    <trading-view
      src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
      :options="type6"
    >
    </trading-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type1: {
        symbols: [
          {
            description: "道琼斯30",
            proName: "FOREXCOM:DJI"
          },
          {
            description: "纳斯达克100",
            proName: "OANDA:NAS100USD"
          },
          {
            description: "标普500",
            proName: "OANDA:SPX500USD"
          },
          {
            description: "日经225",
            proName: "INDEX:NKY"
          },
          {
            description: "富时A50",
            proName: "SSE:512550"
          }
        ],
        colorTheme: "light",
        isTransparent: false,
        locale: "zh_CN"
      },

      type2: {
        symbols: [
          {
            description: "道琼斯30",
            proName: "FOREXCOM:DJI"
          },
          {
            description: "纳斯达克100",
            proName: "OANDA:NAS100USD"
          },
          {
            description: "标普500",
            proName: "OANDA:SPX500USD"
          },
          {
            description: "日经225",
            proName: "INDEX:NKY"
          },
          {
            description: "富时A50",
            proName: "SSE:512550"
          }
        ],
        colorTheme: "light",
        isTransparent: false,
        displayMode: "adaptive",
        locale: "zh_CN"
      },

      type3: {
        width: "450",
        height: "512",
        defaultColumn: "overview",
        defaultScreen: "general",
        market: "forex",
        showToolbar: true,
        colorTheme: "light",
        locale: "zh_CN"
      },

      type4: {
        width: "100%",
        height: "100%",
        symbolsGroups: [
          {
            name: "外汇",
            originalName: "Forex",
            symbols: [
              {
                name: "FX:EURUSD"
              },
              {
                name: "FX:GBPUSD"
              },
              {
                name: "FX:USDJPY"
              },
              {
                name: "FX:USDCHF"
              },
              {
                name: "FX:AUDUSD"
              },
              {
                name: "FX:USDCAD"
              }
            ]
          },
          {
            name: "股票",
            symbols: [
              {
                name: "NYSE:KO",
                displayName: "可口可乐"
              },
              {
                name: "NASDAQ:PDD",
                displayName: "拼多多"
              },
              {
                name: "NYSE:BABA",
                displayName: "阿里巴巴"
              },
              {
                name: "NASDAQ:AMZN",
                displayName: "亚马逊"
              },
              {
                name: "NASDAQ:FB",
                displayName: "Facebook"
              },
              {
                name: "NASDAQ:MSFT",
                displayName: "微软"
              }
            ]
          },
          {
            name: "股指",
            symbols: [
              {
                name: "NASDAQ:MSFSY",
                displayName: "标普500"
              },
              {
                name: "OANDA:NAS100USD",
                displayName: "纳斯达克100"
              },
              {
                name: "FOREXCOM:DJI",
                displayName: "道琼斯30"
              },
              {
                name: "INDEX:NKY",
                displayName: "日经225"
              },
              {
                name: "OANDA:UK100GBP",
                displayName: "富时100"
              },
              {
                name: "SSE:512550",
                displayName: "富时A5"
              }
            ]
          },
          {
            name: "大宗商品",
            symbols: [
              {
                name: "COMEX:GC1!",
                displayName: "黄金"
              },
              {
                name: "NYMEX:CL1!",
                displayName: "原油"
              },
              {
                name: "NYMEX:NG1!",
                displayName: "天然气"
              },
              {
                name: "CBOT:ZS1!",
                displayName: "大豆"
              },
              {
                name: "CBOT:ZC1!",
                displayName: "玉米"
              },
              {
                name: "CBOT:ZW1!",
                displayName: "小麦"
              }
            ]
          }
        ],
        locale: "zh_CN"
      },

      type5: {
        colorTheme: "light",
        dateRange: "12m",
        showChart: true,
        locale: "zh_CN",
        width: "100%",
        height: "100%",
        largeChartUrl: "",
        isTransparent: false,
        plotLineColorGrowing: "rgba(33, 150, 243, 1)",
        plotLineColorFalling: "rgba(33, 150, 243, 1)",
        gridLineColor: "rgba(233, 233, 234, 1)",
        scaleFontColor: "rgba(120, 123, 134, 1)",
        belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
        belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
        symbolActiveColor: "rgba(33, 150, 243, 0.12)",
        tabs: [
          {
            title: "外汇",
            symbols: [
              {
                s: "FX:EURUSD"
              },
              {
                s: "FX:GBPUSD"
              },
              {
                s: "FX:USDJPY"
              },
              {
                s: "FX:USDCHF"
              },
              {
                s: "FX:AUDUSD"
              },
              {
                s: "FX:USDCAD"
              },
              {
                s: "FX:NZDUSD"
              },
              {
                s: "FX:AUDCHF"
              },
              {
                s: "FX:AUDNZD"
              },
              {
                s: "FX:AUDCAD"
              },
              {
                s: "OANDA:EURJPY"
              },
              {
                s: "OANDA:EURAUD"
              }
            ],
            originalTitle: "Forex"
          },
          {
            title: "股票",
            symbols: [
              {
                s: "NYSE:KO",
                d: "可口可乐"
              },
              {
                s: "NASDAQ:PDD",
                d: "拼多多"
              },
              {
                s: "NYSE:BABA",
                d: "阿里巴巴"
              },
              {
                s: "NASDAQ:AMZN",
                d: "亚马逊"
              },
              {
                s: "NASDAQ:FB",
                d: "Facebook"
              },
              {
                s: "NASDAQ:MSFT",
                d: "微软"
              },
              {
                s: "NYSE:NKE",
                d: "耐克"
              },
              {
                s: "NASDAQ:AAPL",
                d: "苹果"
              },
              {
                s: "NYSE:IBM",
                d: "IBM"
              },
              {
                s: "NASDAQ:GOOG",
                d: "谷歌"
              },
              {
                s: "NASDAQ:INTC",
                d: "英特尔"
              },
              {
                s: "NYSE:HPQ",
                d: "惠普"
              }
            ]
          },
          {
            title: "股指",
            symbols: [
              {
                s: "OANDA:SPX500USD",
                d: "标普500"
              },
              {
                s: "OANDA:NAS100USD",
                d: "纳斯达克100"
              },
              {
                s: "FOREXCOM:DJI",
                d: "道琼斯30"
              },
              {
                s: "INDEX:NKY",
                d: "日经225"
              },
              {
                s: "INDEX:DEU30",
                d: "DAX Index"
              },
              {
                s: "OANDA:UK100GBP",
                d: "富时100"
              },
              {
                s: "SSE:512550",
                d: "富时A50"
              },
              {
                s: "INDEX:CAC40",
                d: "CAC40"
              },
              {
                s: "ASX:YQRE",
                d: "ASX200"
              },
              {
                s: "CBOE:VIX",
                d: "VIX"
              },
              {
                s: "RUSSELL:RUT",
                d: "拉塞尔2000"
              },
              {
                s: "INDEX:FTSEMIB",
                d: "富时 MIB"
              }
            ]
          },
          {
            title: "大宗商品",
            symbols: [
              {
                s: "COMEX:GC1!",
                d: "黄金"
              },
              {
                s: "NYMEX:CL1!",
                d: "原油"
              },
              {
                s: "NYMEX:NG1!",
                d: "天然气"
              },
              {
                s: "ICEUS:KC1!",
                d: "咖啡"
              },
              {
                s: "NYMEX:TIO1!",
                d: "铁"
              },
              {
                s: "COMEX:HG1!",
                d: "铜"
              },
              {
                s: "CBOT:ZS1!",
                d: "大豆"
              },
              {
                s: "CBOT:ZC1!",
                d: "玉米"
              },
              {
                s: "CBOT:ZW1!",
                d: "小麦"
              },
              {
                s: "EUREX:TEAI1!",
                d: "茶叶"
              },
              {
                s: "ICEUS:CT1!",
                d: "棉花"
              },
              {
                s: "ICEUS:SB1!",
                d: "糖"
              }
            ]
          }
        ]
      },

      type6: {
        width: "1100",
        height: "512",
        defaultColumn: "overview",
        defaultScreen: "most_capitalized",
        showToolbar: true,
        locale: "zh_CN",
        market: "us"
      }
    };
  }
};
</script>
