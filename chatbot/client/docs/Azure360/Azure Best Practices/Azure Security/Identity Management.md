1. Identity management is a critical aspect of securing and managing access to
   resources in Azure.

2. This section covers the various tools and features to manage identities,
   control access and enforce security policies.

:::info 
Identity management in Microsoft Entra ID will be handled mostly by the
Organization IT Team. The following section highlights the Entra ID security
best practices. 
:::

### Microsoft Entra ID

Microsoft Entra ID, formerly Azure Active Directory (Azure AD), is a cloud-based
identity and access management service. It helps users to sign in and access
resources in the Azure portal.

    1. Use [Microsoft Entra ID Connect](https://learn.microsoft.com/en-us/entra/identity/hybrid/cloud-sync/what-is-cloud-sync) to synchronize on-premises Active Directory with Microsoft Entra ID.

    2. Enable [Entra MFA authentication](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks) to add an additional layer of security by requiring users to provide a second form of authentication, such as a security code or time-based passwords.

    3. Enable [Conditional Access](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview) to automate control decisions based on conditions (who, what, circumstances) and controls (MFA, block access, device compliance).

    4. Enforce [Entra ID Password Protection](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-password-ban-bad-on-premises) to detect and block weak passwords.

    5. Implement [Privileged Identity Management (PIM)](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure) service to manage, control and monitor access to important resources in your organization.

    6. Use [Microsoft Entra ID Role-Based Access Control (RBAC)](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/custom-overview) to manage access to Entra ID resources. Follow the least-privilege principle for RBAC roles.

    7. Enable [Microsoft Entra self-service password reset (SSPR)](https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr) to allow users to change or reset their password without the administrator or help desk.

    8. Enable [SSO (Single Sign-On) to allow users to sign in once](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso#enable-single-sign-on) to access multiple applications and services without re-entering credentials.

    9. Enable [Identity Protection](https://learn.microsoft.com/en-us/entra/id-protection/overview-identity-protection) to automate the detection and remediation of identity-based risks using machine learning and intelligence.

    10. Use [Entra ID audit logs](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-audit-logs) to get comprehensive reports on every logged event.
