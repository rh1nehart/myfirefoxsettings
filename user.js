// Disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);

// Remote debugger settings
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.debugger.prompt-connection", false);
user_pref("devtools.chrome.enabled", true);

// Make fullscreen transition better
user_pref("full-screen-api.transition-duration.enter", "");
user_pref("full-screen-api.transition-duration.leave", "");
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("full-screen-api.transition.timeout", 0);

// Disable alt key
user_pref("ui.key.menuAccessKeyFocuses", false);

// Disable closing window with last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Enable userChrome and some tweaks to it
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("layout.css.light-dark.enabled", true);
user_pref("layout.css.has-selector.enabled", true);
user_pref("widget.non-native-theme.use-theme-accent", true);

// Compact mode
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);

// Site permissions
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.xr", 2);
user_pref("media.autoplay.default", 5);

// Disable container tabs
user_pref("privacy.userContext.enabled", false);

// Disable pocket
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");

// Disable tooltips
user_pref("browser.chrome.toolbar_tips", false);

// Disable tab preview
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);

// Disable sidebar
user_pref("sidebar.revamp", false);
user_pref("sidebar.verticalTabs", false);

// Disable scrolling zoom
user_pref("mousewheel.with_control.action", 0);

// Telemetry
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// Experiments
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

// Detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// Do not track me
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);

// Network
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

// Smooth scroll
user_pref("apz.overscroll.enabled", true);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300);

// Urlbar
user_pref("browser.urlbar.shortcuts.bookmarks", false);
user_pref("browser.urlbar.shortcuts.history", false);
user_pref("browser.urlbar.shortcuts.tabs", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.pocket", false);
user_pref("browser.urlbar.suggest.clipboard", false);
user_pref("browser.search.suggest.enabled.private", true);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.suggest.calculator", true);

// Disable translations
user_pref("browser.translations.enable", false);

// Disable reader mode
user_pref("reader.parse-on-load.enabled", false);

// Disable default browser agent
user_pref("browser.shell.checkDefaultBrowser", false);

// Open bookmarks in new tab
user_pref("browser.tabs.loadBookmarksInTabs", true);

// Font rendering
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.gamma", 1750);
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 5);
user_pref("gfx.direct2d.disabled", true);
user_pref("gfx.font_loader.delay", -1);
user_pref("gfx.font_rendering.cleartype.always_use_for_content", true);
user_pref("gfx.font_rendering.fallback.always_use_cmaps", true);
user_pref("gfx.use_text_smoothing_setting", true);

// Beautiful scrollbar
user_pref("widget.non-native-theme.scrollbar.style", 3);

// Misc
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", false);
user_pref("security.dialog_enable_delay", 0);
user_pref("accessibility.force_disabled", 1);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
