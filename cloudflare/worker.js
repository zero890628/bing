import { brotli_decode } from "./bjs.js"
// 同查找 _U 一样, 查找 KievRPSSecAuth 的值并替换下方的xxx
const KievRPSSecAuth = 'FABaBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACATNpEmLgQ4qGAQ+e7ZMV2Z+punmttfw9XVIQuPTIJ5RkYrwBw7gG1qKpwE3XjlmfEnNklGuvH2NT/SyPMBKgOwoA8laOV3nMDNyo3wCg9oLQg6C7W9yEFhfFWNEozp8Fq7h9s9+h7EEAmMq1QdIGuvZKMzL3Zc3MQuEBSHK92ZGLHAtsfHVrhqdYjdr//N2/PsIORY2rUGYZEGztisYGVEdtlQTs0ERZdoKR7XTrSuDJuRvLkFdvnIgIo8408LrliYOJZz1Iqo9Xo2PgDEdOiJcrTst5FCwyEtmfpEqZEQhyL/iBTdxu36+qMxFAgAk6gjAvYa5WTP/zqHs2dPm69Rkpi97gr/VvBSMXfv0IhhHaoeME7/VBoMHfzXkyv8uC1K76cd3Rf/d3wYHrxKtyJFP3fLck/XYqM+X1uNhO6issmRgVJApVcq5K4VMwL8mqixMpRp3Y+yt3iyC2A1DPCh24OerieJZU17gRxfoEOhzzCVh+RX3NsFctXMYzfwy1eHwSV7Z4r3nMJz9jR0wi96vaP6VVuFNjiR0Dx4F4qzKbNKTcnyTd9NaPrQBIe06xkc47eimK5bxzLWgxFcN79pCuSfM4qClrIQKOBNxH5y4CdMGcqDYNmmm4QdPT3l8ai9HKnhayuRv+F5PAFE1C4/R1wE6uGCDx7qrvZRL2DaCymChLWOtwuXQiz6mAFS8GmJRNyuQQ1011Ny4CBT+ZGXfPiXYpeZFPk8PfnB3hrD++9DBsb9jzkvwORmUFfvTDo/KAYU9Gh+QT+tCwWBcFOpHONzr093gXueUYUy+XR1pJBjn1/J+nqC0FwjOBOie2t6Ggt9Xin0d/gqk3v7TmJjYG/9Px7R8eZmj6TMsEfwYuecNJro2Jb5bI/lbzjsVflWQRTo3ayf4pdB9QZrlerGDuslm6DszTIkbvFil7UMRSXeE/CY7b6hzaQcLhz+UCzNO19NhzyRnM+sxqxtROhIW50wFfeMgJMoWSLPFQ0AdF2TpuGAiGmzYTE7ZaR7SdMVwO3x3T/9LRBKU5+888TKvuBCqoKJtFpdAFcCuxS6OzY7nJrfRfTaQv5yvmrFSB77eu1QrzCvQik4m3bPy8OAkGgrCSwmh6UA1vvaqlfz/Wv0CiBjRQn3cQpQV4ojD00squ5IMOi3y03edaK1Fs8PPc1t+/qHnHrq4Q87+Xe63LSlLKHZrAWlAksqt/t2HqhEy+Z6amA4OFim4MXFvb8AlFO6Il5O81xTdbDHuU0wZtm5cg0xZL+ARo0hGR//jwd/Bvu3Ast7trB4xUrvpQf4MZnv9f3velPw+eHrs1fLfQQMDQ4Lu0JD7acfsVQlWvp6ZQGZulaeWI6VOSzyBVt5ul4tpiBS3zTsUyMp01KQXWIX+q+iPnHKnwnmfId4Heb3ZFAD4Bi3LtO2EiVptljZaOUT0diW0Lw==';
const _RwBf = 'r=1&ilt=3&ihpd=2&ispd=1&rc=483&rb=483&gb=0&rg=0&pc=483&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=5&l=2023-10-24T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=0&p=bingcopilotwaitlist&c=MY00IA&t=338&s=2023-02-13T02:37:54.0098952+00:00&ts=2023-10-25T04:30:05.5265861+00:00&rwred=0&wls=2&wlb=0&lka=0&lkt=0&aad=0&TH=&W=1&mta=0&e=ROOQMlu0qQf4ABUUfNCMYJUUJMvub2mJ3fewWYX0N4C4pDUDekvW0ObCzzKekHjUVmJqCNcN8jcUuZRJlluxE8iyHlLKxa7Y2oyJSOi_X14&A=4D49EDECEC7F9538B1331136FFFFFFFF';
const MUID = '';
const _U = '';

const WEB_CONFIG = {
  WORKER_URL: '', // 请保持默认的''，不要配置该项。
  HOOK_ON: false, // 是否开启ajax/fetch拦截，此功能为预留特性，如无需要请保持false。
};

const SYDNEY_ORIGIN = 'https://sydney.bing.com';
const BING_ORIGIN = 'https://www.bing.com';
const KEEP_REQ_HEADERS = [
  'accept',
  'accept-encoding',
  'accept-language',
  'authorization',
  'connection',
  'cookie',
  'upgrade',
  'user-agent',
  'sec-websocket-extensions',
  'sec-websocket-key',
  'sec-websocket-version',
  'x-request-id',
  'content-length',
  'content-type',
  'access-control-request-headers',
  'access-control-request-method',
  'sec-ms-gec',
  'sec-ms-gec-version',
  'x-client-data',
  'x-ms-client-request-id',
  'x-ms-useragent',
];
const IP_RANGE = [
  ['4.150.64.0', '4.150.127.255'],       // Azure Cloud EastUS2 16382
  ['4.152.0.0', '4.153.255.255'],        // Azure Cloud EastUS2 131070
  ['13.68.0.0', '13.68.127.255'],        // Azure Cloud EastUS2 32766
  ['13.104.216.0', '13.104.216.255'],    // Azure EastUS2 256
  ['20.1.128.0', '20.1.255.255'],        // Azure Cloud EastUS2 32766
  ['20.7.0.0', '20.7.255.255'],          // Azure Cloud EastUS2 65534
  ['20.22.0.0', '20.22.255.255'],        // Azure Cloud EastUS2 65534
  ['40.84.0.0', '40.84.127.255'],        // Azure Cloud EastUS2 32766
  ['40.123.0.0', '40.123.127.255'],      // Azure Cloud EastUS2 32766
  ['4.214.0.0', '4.215.255.255'],        // Azure Cloud JapanEast 131070
  ['4.241.0.0', '4.241.255.255'],        // Azure Cloud JapanEast 65534
  ['40.115.128.0', '40.115.255.255'],    // Azure Cloud JapanEast 32766
  ['52.140.192.0', '52.140.255.255'],    // Azure Cloud JapanEast 16382
  ['104.41.160.0', '104.41.191.255'],    // Azure Cloud JapanEast 8190
  ['138.91.0.0', '138.91.15.255'],       // Azure Cloud JapanEast 4094
  ['151.206.65.0', '151.206.79.255'],    // Azure Cloud JapanEast 256
  ['191.237.240.0', '191.237.241.255'],  // Azure Cloud JapanEast 512
  ['4.208.0.0', '4.209.255.255'],        // Azure Cloud NorthEurope 131070
  ['52.169.0.0', '52.169.255.255'],      // Azure Cloud NorthEurope 65534
  ['68.219.0.0', '68.219.127.255'],      // Azure Cloud NorthEurope 32766
  ['65.52.64.0', '65.52.79.255'],        // Azure Cloud NorthEurope 4094
  ['98.71.0.0', '98.71.127.255'],        // Azure Cloud NorthEurope 32766
  ['74.234.0.0', '74.234.127.255'],      // Azure Cloud NorthEurope 32766
  ['4.151.0.0', '4.151.255.255'],        // Azure Cloud SouthCentralUS 65534
  ['13.84.0.0', '13.85.255.255'],        // Azure Cloud SouthCentralUS 131070
  ['4.255.128.0', '4.255.255.255'],      // Azure Cloud WestCentralUS 32766
  ['13.78.128.0', '13.78.255.255'],      // Azure Cloud WestCentralUS 32766
  ['4.175.0.0', '4.175.255.255'],        // Azure Cloud WestEurope 65534
  ['13.80.0.0', '13.81.255.255'],        // Azure Cloud WestEurope 131070
  ['20.73.0.0', '20.73.255.255'],        // Azure Cloud WestEurope 65534
];

/**
 * 随机整数 [min,max)
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * ip 转 int
 * @param {string} ip
 * @returns
 */
const ipToInt = (ip) => {
  const ipArr = ip.split('.');
  let result = 0;
  result += +ipArr[0] << 24;
  result += +ipArr[1] << 16;
  result += +ipArr[2] << 8;
  result += +ipArr[3];
  return result;
};

/**
 * int 转 ip
 * @param {number} intIP
 * @returns
 */
const intToIp = (intIP) => {
  return `${(intIP >> 24) & 255}.${(intIP >> 16) & 255}.${(intIP >> 8) & 255}.${intIP & 255}`;
};

const getRandomIP = () => {
  const randIndex = getRandomInt(0, IP_RANGE.length);
  const startIp = IP_RANGE[randIndex][0];
  const endIp = IP_RANGE[randIndex][1];
  const startIPInt = ipToInt(startIp);
  const endIPInt = ipToInt(endIp);
  const randomInt = getRandomInt(startIPInt, endIPInt);
  const randomIP = intToIp(randomInt);
  return randomIP;
};

/**
 * 生成随机字符串
 * @param {number} e
 * @returns
 */
const randomString = (e) => {
  e = e || 32;
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678_-+";
  var n = "";
  for (let i = 0; i < e; i++) n += t.charAt(getRandomInt(0, t.length));
  return n;
}

const rewriteBody = async (res) => {
    const content_type = res.headers.get("Content-Type") || "";
    const content_encoding = res.headers.get("Content-Encoding") || "";
    let encoding = null;
    let body = res.body;
     if (WEB_CONFIG.HOOK_ON && (content_type.startsWith("text/html") || res.url.includes("web/index.html"))) {
       body = new HTMLRewriter()
       .on('body', {
         element(element) {
           element.append(`
           <script src="https://ajax.b1ghawk.xyz/dist/ajaxhook.min.js"></script>
           <script src="https://ajax.b1ghawk.xyz/dist/fetchhook.min.js"></script>

           <script>
           
                ah.proxy({
                  //请求发起前进入
                  onRequest: (config, handler) => {
                      console.log(config.url)
                      handler.next(config);
                  },
                  //请求成功后进入
                  onResponse: (response, handler) => {
                      console.log(response.response)
                      handler.next(response)
                  },
                  //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
                  onError: (err, handler) => {
                      console.log(err.type)
                      handler.next(err)
                  }
              });

              fh.hookFetch({
                requestInterceptors: {
                     // input is usually url, init is of Request entity.
                    itc1: function (input, init)
                        {  
                          console.log(init);
                                return init },
                    itc2: function (input, init)
                        {  
                          console.log(init);
                          return init },
                },
                responseInterceptors: {
                    // input is usually url, interceptorRes is of Response body.
                    itc3: function (input, interceptorRes)
                        {  
                          console.log(interceptorRes);
                           return interceptorRes },
                    itc4: function (input, interceptorRes)
                        {  
                          console.log(interceptorRes);
                          return interceptorRes },
                }
              });
            
           </script>
           `, { html: true });
         },
       }).transform(res).body;
     } else if (res.url.endsWith("js")) {
      if (res.url.includes('/rp/')) {
        let decodedContent = null;
        if (content_encoding == 'br') {
          decodedContent = new TextDecoder("utf-8").decode(brotli_decode(new Int8Array(await res.clone().arrayBuffer())));
          encoding = 'gzip';
        } else {
          decodedContent = new TextDecoder("utf-8").decode(new Int8Array(await res.clone().arrayBuffer()));
        }
        if (decodedContent) {
          // @ts-ignore
          body = decodedContent.replaceAll("www.bing.com", WEB_CONFIG.WORKER_URL.replace("http://", "").replace("https://", ""));
        }
      }
    }
   return {body, encoding};
}

/**
 * home
 * @param {string} pathname
 * @returns
 */
const home = async (pathname) => {
  const baseUrl = 'https://raw.githubusercontent.com/Harry-zklcdc/go-proxy-bingai/master/';
  let url;
  if (pathname.indexOf('/web/') === 0) {
    url = pathname.replace('/web/', baseUrl+'web/');
  } else {
    url = baseUrl + 'web/index.html';
  }
  const res = await fetch(url);
  const result = await rewriteBody(res);
  const newRes = new Response(result.body, res);
  if (pathname.endsWith('.js')) {
    newRes.headers.set('content-type', 'application/javascript');
  } else if (pathname.endsWith('.css')) {
    newRes.headers.set('content-type', 'text/css');
  } else if (pathname.endsWith('.svg')) {
    newRes.headers.set('content-type', 'image/svg+xml');
  } else if (pathname.endsWith('.ico') || pathname.endsWith('.png')) {
    newRes.headers.set('content-type', 'image/png');
  } else {
    newRes.headers.set('content-type', 'text/html; charset=utf-8');
  }
  newRes.headers.delete('content-security-policy');
  return newRes;
};

export default {
  /**
   * fetch
   * @param {Request} request
   * @param {*} env
   * @param {*} ctx
   * @returns
   */
  async fetch (request, env, ctx) {
    const currentUrl = new URL(request.url);
    if (WEB_CONFIG.WORKER_URL == '') {
        WEB_CONFIG.WORKER_URL = currentUrl.origin;
    }
    // if (currentUrl.pathname === '/' || currentUrl.pathname.startsWith('/github/')) {
    if (currentUrl.pathname === '/' || currentUrl.pathname.indexOf('/web/') === 0) {
      return home(currentUrl.pathname);
    }
    if (currentUrl.pathname === '/sysconf') {
      return new Response('{"code":200,"message":"success","data":{"isSysCK":false,"isAuth":true}}')
    }
    let targetUrl;
    if (currentUrl.pathname.includes('/sydney')) {
      targetUrl = new URL(SYDNEY_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else {
      targetUrl = new URL(BING_ORIGIN + currentUrl.pathname + currentUrl.search);
    }

    const newHeaders = new Headers();
    request.headers.forEach((value, key) => {
      // console.log(`old : ${key} : ${value}`);
      if (KEEP_REQ_HEADERS.includes(key)) {
        newHeaders.set(key, value);
      }
    });
    newHeaders.set('host', targetUrl.host);
    newHeaders.set('origin', targetUrl.origin);
    newHeaders.set('referer', 'https://www.bing.com/search?q=Bing+AI');
    const randIP = getRandomIP();
    // console.log('randIP : ', randIP);
    newHeaders.set('X-Forwarded-For', randIP);
    const cookie = request.headers.get('Cookie') || '';
    let cookies = cookie;
    if (!cookie.includes('KievRPSSecAuth=')) {
      if (KievRPSSecAuth.length !== 0) {
        cookies += '; KievRPSSecAuth=' + KievRPSSecAuth;
      } else {
        cookies += '; KievRPSSecAuth=' + randomString(512);
      }
    }
    if (!cookie.includes('_RwBf=')) {
      if (_RwBf.length !== 0) {
        cookies += '; _RwBf=' + _RwBf
      } else {
        cookies += '; _RwBf=' + randomString(256);
      }
    }
    if (!cookie.includes('MUID=')) {
        if (MUID.length !== 0) {
          cookies += '; MUID=' + _RwBf
        } else {
          cookies += '; MUID=' + randomString(256);
        }
      }
    if (!cookie.includes('_U=')) {
      if (_U.length !== 0) {
        cookies += '; _U=' + _RwBf
      } else {
        cookies += '; _U=' + randomString(128);
      }
    }
    newHeaders.set('Cookie', cookies);
    const oldUA = request.headers.get('user-agent') || '';
    const isMobile = oldUA.includes('Mobile') || oldUA.includes('Android');
    if (isMobile) {
      newHeaders.set(
        'user-agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/605.1.15 BingSapphire/1.0.410427012'
      );
    } else {
      newHeaders.set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35');
    }

    // newHeaders.forEach((value, key) => console.log(`${key} : ${value}`));
    const newReq = new Request(targetUrl, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
    });

    // console.log('request url : ', newReq.url);
    const res = await fetch(newReq);
    const result = await rewriteBody(res);
    const newRes = new Response(result.body, res);
    result.encoding && newRes.headers.set("Content-Encoding", result.encoding);
    newRes.headers.set('Access-Control-Allow-Origin', request.headers.get('Origin'));
    newRes.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
    newRes.headers.set('Access-Control-Allow-Credentials', 'true');
    newRes.headers.set('Access-Control-Allow-Headers', '*');
    return newRes;
  },
};
