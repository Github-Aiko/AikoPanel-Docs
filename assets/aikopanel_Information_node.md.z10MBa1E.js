import{_ as t,c as e,o as n,a3 as a}from"./chunks/framework.D5qxx6u8.js";const y=JSON.parse('{"title":"Node","description":"","frontmatter":{},"headers":[],"relativePath":"aikopanel/Information/node.md","filePath":"aikopanel/Information/node.md"}'),i={name:"aikopanel/Information/node.md"},o=a('<h1 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;Node&quot;">​</a></h1><p>This article answers some of the questions you need to use AikoPanel to configure nodes.</p><h2 id="protocols-supported-by-aikopanel" tabindex="-1">Protocols supported by AikoPanel <a class="header-anchor" href="#protocols-supported-by-aikopanel" aria-label="Permalink to &quot;Protocols supported by AikoPanel&quot;">​</a></h2><p>AikoPanel currently supports the following protocols:</p><ul><li>Shadowsocks</li><li>Vmess</li><li>VLESS</li><li>Trojan</li><li>Hysteria</li></ul><h2 id="clients-that-support-subscriptions" tabindex="-1">Clients that support subscriptions <a class="header-anchor" href="#clients-that-support-subscriptions" aria-label="Permalink to &quot;Clients that support subscriptions&quot;">​</a></h2><p>Automatic subscription ☑️: The UA carried by the client when requesting allows AikoPanel to know the type of client to process. Automatic subscription: The client requests that AikoPanel cannot recognize the request that needs to carry the parameter specified identification code, such as shadowrocket, please add it after the subscription ❌<code>&amp;flag=shadowrocket</code> , the specific identification code can be viewed in the client list.</p><table tabindex="0"><thead><tr><th style="text-align:center;">Client</th><th style="text-align:center;">Shadowsocks</th><th style="text-align:center;">Vmess</th><th style="text-align:center;">VLESS</th><th style="text-align:center;">Trojan</th><th style="text-align:center;">Hysteria</th><th style="text-align:center;">Automatic subscriptions</th><th style="text-align:center;">Identification code</th></tr></thead><tbody><tr><td style="text-align:center;">Shadowrocket</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">shadowrocket</td></tr><tr><td style="text-align:center;">Quantumult X</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">quantumult%20x, quanx-ping</td></tr><tr><td style="text-align:center;">Stash</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">stash</td></tr><tr><td style="text-align:center;">Clash</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">clash</td></tr><tr><td style="text-align:center;">Surfboard</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">surfboard</td></tr><tr><td style="text-align:center;">Kitsunebi</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">kitsunebi</td></tr><tr><td style="text-align:center;">Surge</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">surge</td></tr><tr><td style="text-align:center;">Stash</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td><td style="text-align:center;">stash</td></tr><tr><td style="text-align:center;">Sing-box</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">sing-box</td></tr></tbody></table><h2 id="what-is-the-difference-between-a-connection-port-and-a-service-port" tabindex="-1">What is the difference between a connection port and a service port <a class="header-anchor" href="#what-is-the-difference-between-a-connection-port-and-a-service-port" aria-label="Permalink to &quot;What is the difference between a connection port and a service port&quot;">​</a></h2><p>The connection port is the port used by the user to connect, and the service port is the port used to provide services to the node. Suppose you have a relay server that forwards data from port 1234 of server A to port 4567 of server B, then the user connects to server A and the service is deployed on server B.</p><h2 id="parent-node-to-child-node-relationship" tabindex="-1">Parent node to child node relationship <a class="header-anchor" href="#parent-node-to-child-node-relationship" aria-label="Permalink to &quot;Parent node to child node relationship&quot;">​</a></h2><p>Generally, it will only be used in the case of multi-entry single exit (multi-transit single landing).</p><p>Parent node The parent node is used by the server to obtain the node configuration and client connection, assuming that the official server is used, only the node configuration needs to be performed on AikoPanel, and there is no need to configure it additionally on the server side, and the configuration will automatically obtain one-click deployment from AikoPanel.</p><p>Child node The child node inherits the node status of the parent node in order to display the correct node status to the user, and the parameter configuration is only used for client connections and will not interact with the server. The node multiplier synchronizes the parent node.</p><p>Transit example Suppose I configure port 443 for the landing end, then I first configure the landing server on the parent node and ensure that it can connect to the landing end, and then we forward the transit port 10443 to the landing port 443, then I only need to copy a child node to change the address to the transit address, and the port to 10443 allows users to connect to the transit.</p><h2 id="permission-groups" tabindex="-1">Permission groups <a class="header-anchor" href="#permission-groups" aria-label="Permalink to &quot;Permission groups&quot;">​</a></h2><p>The permission group is like a bridge between users and nodes, and when deploying the server, the server will pull the users from the permission group configured by the node. Users also only show nodes that have permissions when subscribing.</p><h2 id="node-status-indicator-meaning" tabindex="-1">Node status indicator meaning <a class="header-anchor" href="#node-status-indicator-meaning" aria-label="Permalink to &quot;Node status indicator meaning&quot;">​</a></h2><p>Blue: Everything is fine with the node Yellow: The node is available, but the node is not used or is used but no data is reported to AikoPanel Red: The node is unavailable and the node does not get data from AikoPanel</p><h2 id="routing" tabindex="-1">Routing <a class="header-anchor" href="#routing" aria-label="Permalink to &quot;Routing&quot;">​</a></h2><p>In version 1.7.0, we added routing to replace auditing. When the specified rule is matched, it performs the specified action.</p><p>For example, if I will block access to example.com or <code>access</code> whose domain name contains <code>example.com</code>, then when creating a route, fill in the domain name and the action is Forbidden.example.com</p><p>After the route is created, you need to configure the node to apply it.</p>',23),r=[o];function d(s,l,c,h,p,g){return n(),e("div",null,r)}const x=t(i,[["render",d]]);export{y as __pageData,x as default};
