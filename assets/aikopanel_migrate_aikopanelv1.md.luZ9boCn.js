import{_ as a,c as e,o,U as t}from"./chunks/framework.Vp8l0THH.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aikopanel/migrate/aikopanelv1.md","filePath":"aikopanel/migrate/aikopanelv1.md"}'),i={name:"aikopanel/migrate/aikopanelv1.md"},n=t('<h2 id="guide-to-migrate-aikopanelv1-version" tabindex="-1">Guide to Migrate AikoPanelv1 Version <a class="header-anchor" href="#guide-to-migrate-aikopanelv1-version" aria-label="Permalink to &quot;Guide to Migrate AikoPanelv1 Version&quot;">​</a></h2><h3 id="the-migration-scenario-will-make-the-following-changes-to-your-database" tabindex="-1">The migration scenario will make the following changes to your database <a class="header-anchor" href="#the-migration-scenario-will-make-the-following-changes-to-your-database" aria-label="Permalink to &quot;The migration scenario will make the following changes to your database&quot;">​</a></h3><ul><li>There are too many changes to list all</li></ul><p><strong>Node: NEED Update into AikoPanelv1 Latest</strong></p><h2 id="aapanel-environment" tabindex="-1">aapanel Environment <a class="header-anchor" href="#aapanel-environment" aria-label="Permalink to &quot;aapanel Environment&quot;">​</a></h2><ol><li>Clean up the database entirely</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php artisan db:wipe</span></span></code></pre></div><ol start="2"><li>Import the old database <span style="color:red;">(Important)</span></li></ol><blockquote><p>Import the AikoPanelv1 database into the current Aiko project</p></blockquote><ol start="3"><li>Execute the migration command</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php artisan migratetoaikopanel aikopanelv1</span></span></code></pre></div><ol start="4"><li>Change the configuration file (v2board.php)</li></ol><blockquote><p>You need to rename the file <code>config/v2board.php</code> to <code>config/aikopanel.php</code>, which means renaming v2board.php to aikopanel.php and in the admin user, enter the key as &quot;done.&quot;</p></blockquote>',13),l=[n];function s(r,p,c,h,d,m){return o(),e("div",null,l)}const k=a(i,[["render",s]]);export{u as __pageData,k as default};