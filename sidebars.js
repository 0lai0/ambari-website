/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // ambariSidebar: [{type: 'autogenerated', dirName: '.'}],

  "ambariSidebar": [
    "introduction",
    "release-notes",
    "faq",
    {
      "type": "category",
      "label": "Quick Start",
      "collapsible": true,
      "collapsed": false,
      "items": [
        "quick-start/quick-start-guide",
        "quick-start/download",
        {
          "type": "category",
          "label": "Environment Setup",
          "collapsible": true,
          "collapsed": false,
          "items": [
            "quick-start/environment-setup/vagrant-environment-setup",
            "quick-start/environment-setup/docker-environment-setup",
            "quick-start/environment-setup/bare-metal-kvm-setup"
          ]
        },
        "quick-start/installation-guide"
      ]
    },
    {
      "type": "category",
      "label": "Ambari Design",
      "collapsible": true,
      "collapsed": false,
      "link": {
        "type": "doc",
        "id": "ambari-design/index"
      },
      "items": [
        "ambari-design/alerts",
        {
          "type": "category",
          "label": "Automated Kerberizaton",
          "link": {
            "type": "doc",
            "id": "ambari-design/kerberos/index"
          },
          "items": [
            "ambari-design/kerberos/kerberos_descriptor",
            "ambari-design/kerberos/kerberos_service",
            "ambari-design/kerberos/enabling_kerberos"
          ]
        },
        {
          "type": "category",
          "label": "Blueprints",
          "link": {
            "type": "doc",
            "id": "ambari-design/blueprints/index"
          },
          "items": [
            "ambari-design/blueprints/blueprint-ha",
            "ambari-design/blueprints/blueprint-ranger"
          ]
        },
        "ambari-design/enhanced-configs/index",
        "ambari-design/service-dashboard/index",
        {
          "type": "category",
          "label": "Metrics",
          "link": {
            "type": "doc",
            "id": "ambari-design/metrics/index"
          },
          "items": [
            "ambari-design/metrics/metrics-collector-api-specification",
            "ambari-design/metrics/configuration",
            "ambari-design/metrics/operations",
            "ambari-design/metrics/troubleshooting",
            "ambari-design/metrics/metrics-api-specification",
            "ambari-design/metrics/stack-defined-metrics",
            "ambari-design/metrics/upgrading-ambari-metrics-system",
            "ambari-design/metrics/ambari-server-metrics",
            "ambari-design/metrics/ambari-metrics-whitelisting"
          ]
        },
        "ambari-design/quick-links",
        {
          "type": "category",
          "label": "Stacks and Services",
          "link": {
            "type": "doc",
            "id": "ambari-design/stack-and-services/index"
          },
          "items": [
            "ambari-design/stack-and-services/overview",
            "ambari-design/stack-and-services/custom-services",
            "ambari-design/stack-and-services/defining-a-custom-stack-and-services",
            "ambari-design/stack-and-services/extensions",
            "ambari-design/stack-and-services/how-to-define-stacks-and-services",
            "ambari-design/stack-and-services/management-packs",
            "ambari-design/stack-and-services/stack-inheritance",
            "ambari-design/stack-and-services/stack-properties",
            "ambari-design/stack-and-services/writing-metainfo",
            "ambari-design/stack-and-services/faq",
            "ambari-design/stack-and-services/hooks",
            "ambari-design/stack-and-services/version-functions-conf-select-and-stack-select"
          ]
        },
        "ambari-design/technology-stack",
        {
          "type": "category",
          "label": "Views",
          "link": {
            "type": "doc",
            "id": "ambari-design/views/index"
          },
          "items": [
            "ambari-design/views/framework-services",
            "ambari-design/views/view-api",
            "ambari-design/views/view-definition"
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Ambari Development",
      "collapsible": true,
      "collapsed": false,
      "link": {
        "type": "doc",
        "id": "ambari-dev/index"
      },
      "items": [
        "ambari-dev/building-from-source",
        "ambari-dev/running-tests",
        "ambari-dev/development-process-for-new-major-features",
        "ambari-dev/ambari-code-layout",
        "ambari-dev/apache-ambari-jira",
        "ambari-dev/coding-guidelines-for-ambari",
        "ambari-dev/how-to-commit",
        "ambari-dev/how-to-contribute",
        "ambari-dev/bigtop-guide",
        "ambari-dev/code-review-guidelines",
        "ambari-dev/releasing-ambari",
        "ambari-dev/admin-view-ambari-admin-development",
        "ambari-dev/unit-test-reports",
        "ambari-dev/development-in-docker",
        "ambari-dev/developer-tools",
        "ambari-dev/feature-flags",
        "ambari-dev/verifying-release-candidate"
      ]
    },
    {
      "type": "category",
      "label": "Ambari Plugin Contributions",
      "link": {
        "type": "doc",
        "id": "ambari-plugin-contribution/index"
      },
      "items": [
        {
          "type": "category",
          "label": "Ambari SCOM Management Pack",
          "link": {
            "type": "doc",
            "id": "ambari-plugin-contribution/scom/index"
          },
          "items": [
            "ambari-plugin-contribution/scom/installation"
          ]
        },
        "ambari-plugin-contribution/step-by-step"
      ]
    },
    "ambari-alerts",
    {
      "type": "category",
      "label": "Apache",
      "collapsible": true,
      "collapsed": false,
      "items": [
        {
          "type": "link",
          "label": "Foundation",
          "href": "https://www.apache.org/"
        },
        {
          "type": "link",
          "label": "Events",
          "href": "https://www.apachecon.com/"
        },
        {
          "type": "link",
          "label": "License",
          "href": "https://www.apache.org/licenses/"
        },
        {
          "type": "link",
          "label": "Thanks",
          "href": "https://www.apache.org/foundation/thanks.html"
        },
        {
          "type": "link",
          "label": "Security",
          "href": "https://www.apache.org/security/" // if we have specific security.html, it should be here
        },
        {
          "type": "link",
          "label": "Sponsorship",
          "href": "https://www.apache.org/foundation/sponsorship.html"
        },
        {
          "type": "link",
          "label": "Trademarks",
          "href": "https://www.apache.org/foundation/marks/"
        },
        {
          "type": "link",
          "label": "Privacy",
          "href": "https://privacy.apache.org/policies/privacy-policy-public.html"
        },
      ]
    }
  ]
};

module.exports = sidebars;