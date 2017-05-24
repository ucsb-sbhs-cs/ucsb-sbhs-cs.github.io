---
curriculum: DSW
name: "Security"
num: 6
summary: "OAuth.  Web App vulnerabilities.  Sanitizing Inputs, Captchas"
topics:
 - Web App Vulnerabilities
 - Spam prevention
 - Denial of Service
 - Code injection
 - Sanitizing Inputs via Python itsdangerous
 - CAPTCHAs using FlaskWTF
 - Authentication and Authorization
 - OAuth
 - Role based security
learning_objectives:
 - "The student will be able to explain some vulnerabilities of web apps that allow users to update state but that are not secured"
 - "The student will be able to explain what a Denial of Service attack is"
 - "The student will be able to explain what a Code Injection attack is"
 - "The student will be able to explain how web apps are vulnerable to spam if not secured"
 - "The student will be able to write Python code that sanitizes user inputs when appropriate"
 - "The student will be able to identify the circumstances where sanitizing inputs is necessary, and why"
 - "The student will be able to write Python code to add a CAPTCHA to a web application using FlaskWTF"
 - "The student will be able to explain the difference between authentication and authorization"
 - "The student will be able to identify whether a given scenario involves authentication, authorization, neither or both, and explain their answer"
 - "The student will be able to give an example of a web application where role based security is appropriate"
 - "The student will be able to write Python code to add role based security to a simple Flask web application."

uc_ag_summary: >
  In this unit, students explore the vital issue of cybersecurity through the lens of web applications.  They will learn about the various kinds of attacks, and how to defend against them.    This unit also lays the foundation for implementing applications that store long-term server side state (e.g. databases), given that these applications are considerably more vulnerable to attack that the ones developed earlier in the course.

uc_ag_assignment: >
  A key assignment for this unit will be the implementation of a web application that provides login/logout capability via OAuth.
  This is a pre-requisite skill for any application that will store state associated with user accounts.
  It is also one that requires careful reading and serious attention to analytical thinking in order to successfully debug and deploy.
 
---


## Activities



