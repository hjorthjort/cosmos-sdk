(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{689:function(C,I,g){"use strict";g.r(I);var t=g(1),A=Object(t.a)({},(function(){var C=this,I=C.$createElement,g=C._self._c||I;return g("ContentSlotsDistributor",{attrs:{"slot-key":C.$parent.slotKey}},[g("h1",{attrs:{id:"блокчеин-для-конкретного-приложения"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#блокчеин-для-конкретного-приложения"}},[C._v("#")]),C._v(" Блокчейн для конкретного приложения")]),C._v(" "),g("p",[C._v("В этом разделе описаны особенности блокчейнов для конкретных приложений и почему разработчики могут сделать выбор в пользу них, а не смарт-контрактов.")]),C._v(" "),g("h2",{attrs:{id:"почему-блокчеин-для-конкретного-приложения"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#почему-блокчеин-для-конкретного-приложения"}},[C._v("#")]),C._v(" Почему блокчейн для конкретного приложения")]),C._v(" "),g("p",[C._v("Вместо создания децентрализованного приложения поверх существующего блокчейна, такого как Ethereum, разработчики могут написать собственный блокчейн с нуля, который настроен для работы с одним конкретным приложением. Это предполагает создание полного клиента, легкого клиента, необходимых интерфейсов (CLI, REST...) для взаимодействия с нодами.")]),C._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgIF4gICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgXgogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8ICAgQnVpbHQgd2l0aCBDb3Ntb3MgU0RLCiAgICAgICAgICAgICAgICB8ICB8INCa0L7QvdC10YfQvdGL0Lkg0LDQstGC0L7QvNCw0YIgPSDQv9GA0LjQu9C+0LbQtdC90LjQtSB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHYKICAgICAgICAgICAgICAgIHwgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBeCiDQndC+0LTQsCDQsdC70L7QutGH0LXQudC90LAgfCAgfCAgICAgICAgICAg0JrQvtC90YHQtdC90YHRg9GBICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHwgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgfCAgIFRlbmRlcm1pbnQgQ29yZQogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICDQodC10YLRjCAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHYgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgdgo="}}),C._v(" "),g("h2",{attrs:{id:"какие-недостатки-есть-у-смарт-контрактов"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#какие-недостатки-есть-у-смарт-контрактов"}},[C._v("#")]),C._v(" Какие недостатки есть у смарт-контрактов?")]),C._v(" "),g("p",[C._v("Блокчейны, основанные на виртуальных машинах, такие как Ethereum реализовали потребность в большей программируемости блокчейнов еще в 2014 году. В то время варианты доступные для создания децентрализованных приложений были ограничены. Большинство разработчиков строили свои приложения, используя сложный и ограниченный в возможностях скриптовый язык Биткоина, или же работая над форком исходного кода Биткоина, модифицировать который под свои потребности было сложно.")]),C._v(" "),g("p",[C._v("Блокчейны, основанные на виртуальных машинах, имели новое ценностное предложение. Их конечный автомат включает в себя виртуальную машину, способную интерпретировать Тьюринг-полные программы, называемые смарт-контрактами. Эти умные контракты хорошо подходили для «одноразовых» программ, таких как ICO, однако плохо для построения сложных децентрализованных платформ:")]),C._v(" "),g("ul",[g("li",[g("p",[C._v("Смарт-контракты обычно разрабатываются с использованием языков программирования, которые интерпретирует виртуальная машина. Эти языки часто действуют в рамках ограничений виртуальной машины. К примеру, виртуальная машина Ethereum (EVM) не позволяет разработчикам реализовать автоматическое исполнение кода. Разработчики также ограничены системой счетов EVM, и ограниченным множеством функций, необходимых для криптографии. Это примеры думонстрируют ограниченную "),g("strong",[C._v("гибкость")]),C._v(" смарт-контрактов.")])]),C._v(" "),g("li",[g("p",[C._v("Все смарт-контракты выполняются на одной и той же виртуальной машине. Это означает, что они конкурируют за ресурсы, что существенного ограничивает производительность. Даже если конечный автомат будет разделен на несколько множеств (например, с помощью шардинга), смарт-контракты все равно выполняются на виртуальной машине. Это ведет к низкой производительности в сравнении с нативным приложением, написанным на уровне самого конечного автомата. Наши тесты показывают 10-и кратное увеличение производительности в ситуациях без виртуальной машины.")])]),C._v(" "),g("li",[g("p",[C._v("Другая проблема связана с тем, что все смарт-контракты выполняются в одном окружении, что приводит к ограниченному "),g("strong",[C._v("суверенитету")]),C._v(". Децентрализованное приложение — это экосистема, в которой участвуют несколько игроков. Если приложение построено на виртуальной машины общего блокчейна, эти игроки имеют очень ограниченный суверенитет над ним. Если в приложении есть ошибка, с этим мало что можно сделать.")])])]),C._v(" "),g("p",[C._v("Специфичные для приложения блокчейны призваны устранить эти недостатки.")]),C._v(" "),g("h3",{attrs:{id:"преимущества-специфичных-блокчеинов"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#преимущества-специфичных-блокчеинов"}},[C._v("#")]),C._v(" Преимущества специфичных блокчейнов")]),C._v(" "),g("h3",{attrs:{id:"гибкость"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#гибкость"}},[C._v("#")]),C._v(" Гибкость")]),C._v(" "),g("p",[C._v("Специфичные блокчейны предоставляют максимальную гибкость для разработчиков.")]),C._v(" "),g("ul",[g("li",[g("p",[C._v("В блокчейнах, построенных на Cosmos, конечный автомат типично соединен с лежащим в основе движком консенсуса через интерфейс ABCI. Этот интерфейс можно использовать из любого языка программирования, это означает, что разработчик может использовать предпочтительный язык для создания своего приложения.")])]),C._v(" "),g("li",[g("p",[C._v("ABCI позволяет сменить движок консенсуса для своего блокчейна. На сегодняшний день только Tendermint готов для использования, но в будущем появятся и другие.")])]),C._v(" "),g("li",[g("p",[C._v("Разработчики имеют полную свободу действий при выборе количества валидаторов, желаемой производительности, безопасности, DB или IAVL-деревьев для хранения, UTXO...")])]),C._v(" "),g("li",[g("p",[C._v("Разработчики могут реализовать автоматическое исполнение кода. В Cosmos SDK код может автоматически запускаться в начале и конце каждого блока. У разработчика также остается выбор криптографической библиотеки, используемой в приложении.")])])]),C._v(" "),g("h3",{attrs:{id:"производительность"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#производительность"}},[C._v("#")]),C._v(" Производительность")]),C._v(" "),g("p",[C._v("Производительность децентрализованных приложений, построенных на основе смарт-контрактов, всегда ограничена окружением, в котором они работают. Построение приложения на своем собственном блокчейне позволяет оптимизировать производительность благодаря следующим преимуществам:")]),C._v(" "),g("ul",[g("li",[g("p",[C._v("Разработчики могут выбрать более современный движок консенсуса, например, Tendermint BFT. В сравнении с Proof-of-Work, используемым в большинстве виртуальных машин блокчейнов, Tendermint позволяет получить высокую пропускную способность.")])]),C._v(" "),g("li",[g("p",[C._v("Собственный блокчейн хранит данные одного конкретного приложения, поэтому этому приложению не приходится конкурировать за ресурсы с другими. Это не так на большинстве блокчейнов, в которых смарт-контракты конкурируют за вычислительную мощность и пространство для хранения данных.")])]),C._v(" "),g("li",[g("p",[C._v("Даже если виртуальная машина блокчейна дает возможность шардинга и имеет эффективный алгоритм консенсуса, производительность будет ограничена самой виртуальной машиной: необходимость интерпретации транзакций виртуальной машиной существенно увеличивает требуюмую вычислительную мощность для из обработки.")])])]),C._v(" "),g("h3",{attrs:{id:"безопасность"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#безопасность"}},[C._v("#")]),C._v(" Безопасность")]),C._v(" "),g("p",[C._v("Безопасность сложно охарактеризовать количественно, и степень безопасности системы различается в зависимости от платформы. Тем не менее блокчкейн для конкретного приложения имеет ряд преимуществ:")]),C._v(" "),g("ul",[g("li",[g("p",[C._v("Разработчики могут выбрать надежный и современный язык программирования, такой как, например, Go, для создания блокчейна, а не язык смарт-контрактов.")])]),C._v(" "),g("li",[g("p",[C._v("Разработчики не ограничены набором криптографических функций, доступных виртуальной машине. Они могут использовать свои функции и необходимые им библиотеки, которые прошли аудит.")])]),C._v(" "),g("li",[g("p",[C._v("Разработчикам не приходится переживать о безопасности самой виртуальной машины, что упрощает работу с безопаностью приложения.")])])]),C._v(" "),g("h3",{attrs:{id:"независимость"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#независимость"}},[C._v("#")]),C._v(" Независимость")]),C._v(" "),g("p",[C._v("Одно из основных преимуществ собственных блокчейнов заключается в их независимости. Децентрализованное приложение — это экосистема, которая включает множество акторов: пользователей, разработчиков, сторонних сервисов и прочих. Когда разработчики опираются на блокчейн виртуальной машины, где сосуществуют многие децентрализованные приложения, сообщество приложений отличается от сообщества блокчейна. Если появляется ошибка или требуется новая функция, сообщество приложения не имеет достаточных прав, чтобы внести измененения в код блокчейна. Если сообщество блокчейна отказывается самостоятельно исправлять ошибки, ничего не может произойти.")]),C._v(" "),g("p",[C._v("Основная проблема здесь заключается в том, что управление приложением и управление сетью не согласованы. Эта проблема решается с помощью блокчейнов для конкретных приложений. Поскольку специфичные для приложения блокчейны специализируются на работе с одним приложением, сообщество приложения имеет полный контроль над всей системой. Это гарантирует, что действия сообщества не будут заблокированы, если будет обнаружена ошибка, и что оно имеет полную свободу выбора в траектории своего развития.")]),C._v(" "),g("h2",{attrs:{id:"начните-создавать-свои-блокчеин-для-конкретного-приложения-уже-сегодня"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#начните-создавать-свои-блокчеин-для-конкретного-приложения-уже-сегодня"}},[C._v("#")]),C._v(" Начните создавать свой блокчейн для конкретного приложения уже сегодня")]),C._v(" "),g("p",[C._v("Очевидно, что собственные блокчейны имеют массу преимуществ. Cosmos SDK делает их разработку проще как никогда. Создайте свой блокчейн!")]),C._v(" "),g("ul",[g("li",[g("p",[C._v("Узнайте больше об [архитектуре](./ sdk-app-Architecture) приложения, построенного с помощью SDK.")])]),C._v(" "),g("li",[g("p",[C._v("Узнайте, как создать блокчейн для конкретного приложения с нуля, с помощью "),g("a",{attrs:{href:"https://cosmos.network/docs/tutorial",target:"_blank",rel:"noopener noreferrer"}},[C._v("SDK tutorial"),g("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);I.default=A.exports}}]);