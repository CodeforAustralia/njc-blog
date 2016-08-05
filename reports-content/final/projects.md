## Projects
### Online Pleas
Online pleas progressed the furthest out of all the prototypes, we developed a simple prototype to allow individuals to submit a guilty plea for minor infringements online. The prototype demonstrates how a guilty plea could be lodged online prior to the scheduled court date for non-complex minor offences - typically these offences comprise nearly 50% of MCV’s (Magistrates Court Victoria) case volume.

The prototype was developed to be a simple online form that would allow clients to fill in some simple information about who they are, the offence that they are choosing to plead guilty to and a message to the magistrate. The message to the magistrate might include explaining why you offended, your personal or financial circumstances, and things you would like the magistrate to consider when deciding your sentence. The form also includes declarations from the client acknowledging that they have the option to plead guilty or not guilty to the offences and that the plea is entered voluntarily of their own will. Once the form is completed, a copy is formatted and sent to the registry ready to be processed by the magistrate.

A lot of investigation and changes were required along the way, initially we had hoped clients could simply enter an offence number which would identify their case but because of the different systems used between police and the courts, this could not be easily established. Types of offences that were too complicated or had the potential to slow down progress were removed altogethor. Additionally we spent time understanding how to communicate this service to clients of the court, how the registry could quickly identify the relevant cases and include the right information in the summons.

This prototype is now ready for a pilot test with real world users, the pilot test should be an opportunity to gain feedback and research from real court clients, it should provide further insight in the likelihood of court

Further improvements needed after the pilot include:
* Planning for multiple sites - the current prototype is NJC specific
* Integration with the courts systems to identify upcoming matters that might be eligible
* Workflow for registry staff to simplify identifying potential matters, notifying the clients of the option and updating the court records
* The ability to have a standardised offence number which could be used to identify the matter
* Thorough review of the types of cases that could be included
* User experience research and testing

<button class="btn btn-default">View demo</button>

### Case Triage
One of the strengths of the NJC is the wholistic approach taken to supporting their clients. Client services is mostly composed of staff from various service providers within the City of Yarra, specialising in a vast array of different areas such as drug and alchohol counselling, family violence support, financial and housing support among others. This is particularily showcased in the NJC's approach to family violence matters.

Family violence matters are all heard on the same day, in the week prior to the hearings, staff prepare background information on each of the members in the matter. This allows each of the service providers to not only share any information they might have that could be beneficial to the client, but also for the staff to assess what kind of situation the client is and which services might be appropriate to provide support for the client on the day. This whole process comes in contact with most of the services within the NJC included the legal staff, court registry and most of the service providers. Prior to the matters being heard, all the service providers meet to go through the cases togethor update any new information and decide on which services should be assigned to which clients. Throughout the day staff update each other on the progress of the matters they have been assigned where necessary.

This process is mostly manual with highlighted sheets of paper passed around to communicate a range of information, additionally it is difficult to look back through the history of records for information on the outcomes of a matter and of the different support that was provided from the services, some of the information is recorded on the NJC's case management tool, mostly information about referrals made for a client, but there was a definite gap of information that is not recorded that really captures the full scale of the support the NJC staff provide to their clients.

The case triage dashboard provides an opportunity for all the staff involved in the family violence cases to:

* Assign services to provide support for a client
* Track which services met with a client and what support was offered
* Search a history of all the cases that have been entered and view any relevant outcomes + services provided
* Enter outcomes from a hearing for each case
* Update cases with a legal conflict, allowing the registry to plan which cases might require an alternative legal provider
* Export all the data for quantitative analysis
* Update client information like name and date of birth when not available from the court listing

This prototype was able to give use enough information about how a tool like this could be useful, we could test it within a small group of the NJC service providers without disrutping their day to day work and start to explore where the areas of improvement would be.

The next steps required would be for a proper pilot test to be conducted for at least a month, the pilot would be an opportunity to trial completely replacing the paper process, retaining the paper as a backup and thoroughly testing not only how useful the tool is for all the services included but also delve into any of the edge cases we might have missed.

One of the major limitations of the current prototype is the lack of integration with the courts case system, this proved to be a constant point of blockage during the fellowship so we opted to manually enter the cases each week when they are available. This is a far from ideal solution and adds uneeded overhead to the process, the ideal solution would be a direct feed from the courts system to populate the list of cases for the next week, removing the need for manual entry and reducing the likelihood of errors.

Other areas for further improvement include:

* Integration with other NJC and courts systems to share information
* Expanding the reporting and data available
* User experience testing

<button class="btn btn-default">View demo</button>

### Intranet
This prototype was mostly the result of a series of earlier prototypes around improving internal communications, staff updates and knowledge sharing at the NJC. A large group of the NJC staff are employed by external service providers but they work within the centre for the majority of their week, this results in an environment where different staff have different levels of access to information, tools and software necessary for their day to day work, additionally staff regularly work in the community outside the centre on varying schedules making it difficult to know is currently available in the centre. The prototype provided an opportunity to envision what an intranet for a magistrates court could look like, it provided an opportunity to explore what kind of features could be useful for staff in their day to day work and also help improve the communication and knowledge sharing between the different teams.

We focused on document and information (news, events) management and a central staff listing with , this was one of the key areas of interest.

We were able to develop a working prototype to provide a central location for:

- Managing links to all documents, policies, procedures and forms
- Quick access to contact details for the current duty worker
- Sharing news and upcoming events
- Staff in and out status
- Integrated search across staff contact details, documents, news and events
- An opportunity for staff to provide feedback for improvement

While the prototype worked well enough as a mechanism to gather feedback from the different teams within the NJC to help shape how a tool like this could be used, there was definately room for further improvement and development. This requires more user research, the pain points it currently addressed were really more of the 'obvious' use cases, but there would be more potential for this be something that is embedded deeply into how the NJC shares information and knowledge internally.

Some of the features that were discussed but not implemented included:
* Library of information research staff come across relating to community justice
* Utilising existing tools from MCV for hosting and development of the intranet
* The ability to view previous versions of a document

Particularly the staff in and out board, this could be pursued as a standalone solution to help communicate who is currently at the NJC and who the duty worker for the day is, further work would need to be done to:

* Investigate options for updating your status to reduce friction for users ie email a specific inbox, saving a bookmarklet, webapp
* Sending prompts and reminders for staff to update their status
* Integration with any appointment management tool

<button class="btn btn-default">View demo</button>
