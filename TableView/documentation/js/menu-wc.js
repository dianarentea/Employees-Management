'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">table-view documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-87090309ced643ce6daea83cf9ce5ea61d74b00e137da72f75b37bc17e8f8b6ca5e7a694ce5bd7ef19d3f9752438bbfc79f03f2be3a3da82d4b8f47e7501f977"' : 'data-bs-target="#xs-components-links-module-AppModule-87090309ced643ce6daea83cf9ce5ea61d74b00e137da72f75b37bc17e8f8b6ca5e7a694ce5bd7ef19d3f9752438bbfc79f03f2be3a3da82d4b8f47e7501f977"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-87090309ced643ce6daea83cf9ce5ea61d74b00e137da72f75b37bc17e8f8b6ca5e7a694ce5bd7ef19d3f9752438bbfc79f03f2be3a3da82d4b8f47e7501f977"' :
                                            'id="xs-components-links-module-AppModule-87090309ced643ce6daea83cf9ce5ea61d74b00e137da72f75b37bc17e8f8b6ca5e7a694ce5bd7ef19d3f9752438bbfc79f03f2be3a3da82d4b8f47e7501f977"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link" >MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MainModule-8c7436f158232344724f6eb047fea6c9953c53a712d7f31e197d44d9509c5debb069b93b06b07712acfe7bfd8643159dc098884e53b0f8ac7633ec0daa270038"' : 'data-bs-target="#xs-components-links-module-MainModule-8c7436f158232344724f6eb047fea6c9953c53a712d7f31e197d44d9509c5debb069b93b06b07712acfe7bfd8643159dc098884e53b0f8ac7633ec0daa270038"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-8c7436f158232344724f6eb047fea6c9953c53a712d7f31e197d44d9509c5debb069b93b06b07712acfe7bfd8643159dc098884e53b0f8ac7633ec0daa270038"' :
                                            'id="xs-components-links-module-MainModule-8c7436f158232344724f6eb047fea6c9953c53a712d7f31e197d44d9509c5debb069b93b06b07712acfe7bfd8643159dc098884e53b0f8ac7633ec0daa270038"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link" >MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TripModule.html" data-type="entity-link" >TripModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TripModule-61f9589d76df359c5d352e43088255efe03d521592fec433212099dff06e317ae929d6ccb70014b884404c4ecd897e0c31c50f2647926052fbf4f3f8931d5043"' : 'data-bs-target="#xs-components-links-module-TripModule-61f9589d76df359c5d352e43088255efe03d521592fec433212099dff06e317ae929d6ccb70014b884404c4ecd897e0c31c50f2647926052fbf4f3f8931d5043"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TripModule-61f9589d76df359c5d352e43088255efe03d521592fec433212099dff06e317ae929d6ccb70014b884404c4ecd897e0c31c50f2647926052fbf4f3f8931d5043"' :
                                            'id="xs-components-links-module-TripModule-61f9589d76df359c5d352e43088255efe03d521592fec433212099dff06e317ae929d6ccb70014b884404c4ecd897e0c31c50f2647926052fbf4f3f8931d5043"' }>
                                            <li class="link">
                                                <a href="components/AllTripsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllTripsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyTripsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyTripsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyTripsTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyTripsTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TripRoutingModule.html" data-type="entity-link" >TripRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TripsService.html" data-type="entity-link" >TripsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Trip.html" data-type="entity-link" >Trip</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});