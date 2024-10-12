<!-- markdownlint-disable MD024 Disabling check for duplicate sub headings-->

# Clean Code

This is a book review on 'Clean Code', by Robert C. Martin.

[[_TOC_]]

## Foreword

" As for this book, it is the best pragmatic application of 'Lean' principles to
software I have ever seen in print" `James O. Coplien`

## Introduction

Clean code is a handbook of agile software craftsmanship. This document
summarizes the real life and project examples, suggestions on how clean code has
improved the programmers life.

Note: The current document includes review until chapter 3 - Functions.

## Meaningful Names

### Highlights

    1. Naming Kid is fun
    2. Weird to have names
    3. Q&A

### Summary

1.  Avoid using Hungarian notation (Name starting with the type of the
    variable). This may lead to confusion and reduce the benefit of the code
    editor. It is really weird for a new programmer to read your code having
    some variable name as below :

           list_i = [0, 1, 2]

2.  Spend enough time in naming. Variable can be named based on its intentions
    and goal.

3.  Avoid adding iterators to have unique names. It doesn't make sense and it
    reduces the readability.

4.  Follow the "Boy Scout" Rule. Boy Scout Rule can be summarized as:

        'Leave your code better than you found it'.

    Don't hesitate to rename old functions or variables when you find duplicate
    names.

5.  Pick one kind of word per concept.

    For example, name as function as :

        get_student(); get_teacher()

    Don't name as follows :

        get_student(): fetch_teacher()

6.  Use searchable names. Let's say we have to check for age limit of value 18.
    Instead of using the value directly in condition statements, we can assign a
    Constant name as follows which is more searchable.

           'ELIGIBLE_AGE' = 18

### Experience

#### Naming the child

If you got a Kid, you got to name for sure. Naming get's complicated with so
much constraints. Because the naming involves many people and factors. A parent
has to deal with following factors.

1.  Astrologer suggested a small list of starting letters, while all the
    starting letters mentioned is tough to be formed into a meaningful name. It
    is not aligned with their interest.

2.  It should be a boy name.

3.  It should not be too long or difficult to pronounce.

4.  Relatives suggested some names, they had to consider them in mind too.

Hence a good amount of time is spent on finding out the name satisfying most of
the constraints.

### Q&A

1.  Does naming meaningfully necessary in graphical program like LabVIEW?

    Yes, it is another programming. It involves naming the variables, UI
    elements ans SubVI's.

2.  What should we do in case the customer wants name to be short than being big
    and meaningful?

           We can't completely avoid meaningful names. We shall reduce the size and follow same standard across the team.

3.  I have to get a user input in python. I get the input as string and
    converting it to an integer for calculation purpose. How should I name in
    this case?

           Naming can be done depending on the context and intention. Don't use 'Hungarian Notation". Try to take the input in integer form itself if possible.

## Functions

### Highlights

    1. How to write clean code functions?
    2. Birthday cake! Yummy!
    3. Refactoring - Boy Scout Rule
    4. Q&A

### Summary

1. Write functions to achieve single functionality or purpose. Don't write huge
   lines of code in single functions.(Single responsibility principle)
2. For example lets say we have to validate the user for an application login.
   We need not write every logic to check if valid user and also write code to
   handle guest code. Instead we could handle this in two separate functions and
   call them.
3. Avoid repeating the logics instead reuse them.
4. Easy to follow DevOPS when we write clean code.
5. Break down functions based on right design.
6. Don't have the arguments in outer caller functions only because one of the
   inner function requires it.
7. Draw boundary for the number of function designed.
8. It takes time to write to clean code but it is worthy for healthy programmers
   life.

### Experience

#### Ordering the cake for the baby

We want yummy cakes to make the tummy feel good. But what about the design of
the cake. We decided the theme to be universe to show the baby of how the world
can be. Cake had independent Layers connecting to each other. Staring with
bottom layer of aquarium. Middle Layer with upper sea and shore. Finally the sky
and space.

#### Deal with software projects

Ended up in writing a huge function which worked well. But, when read the lines
of code, realized most of them were duplicate code.

Writing automation tests for the tightly coupled functions was really tough.

After writing up the code already, I didn't actually hesitate to refactor it.
Rewrote functions with each of its own purpose. It is time consuming but worthy
in benefits. It improves readability, testing.

Incorporated 'DRY' principle to avoid duplications and confusions.

### Q&A

1.  Is it too much to take up to write clean code functions?

    It is time consuming process sometime. But it improves many things like
    testing, readability and so. clean code makes a good impression.

2.  Should we set boundary to number of functions?

        Yes, draw line based on how much effort it takes and how readable the code is.

3.  What are all the top three things to consider for refactoring to get clean
    code.

            1. Identify if it is not clean code.
            2. Don't hesitate to clean code (Boy Scout rule).
            3. Follow single responsibility principle.
            4. Follow try catch implementation in places needed.
            5. Draw boundaries to split functions. Don't end up in too many.

## Take Away from session

    1. Have meaningful name.
    2. Reveal intention through naming.
    3. Ok to spend time for naming properly and writing clean code.
    4. Have checkpoints and boundaries in splitting functions.
    5. Follow single responsibility principle for writing functions.





# Clean Code

This is a summary of `Clean Code`, by Robert C. Martin.

This is a compilation of book summaries shared in chapter-wise highlights

[[_TOC_]]

## Chapter 1 - Clean code

Robert (the author) says here why we are reading this book first as to become
better programmers and how we'll become one at the end after going through the
book.

We're asked why we hurry up developing something quicker and make up a mess on
the code. He gives importance to why the developers should consider clean code
practices as well as estimating efforts for any module or any code development.

Some importance of Clean Code:

- Clean code is not just about technical correctness; it's about readability,
  maintainability, and adaptability.
- Clean code is an investment that pays off in the long run. Messy code leads to
  slower. development, more bugs, and higher maintenance costs, ultimately
  hurting businesses.
- Writing clean code is not just about technical skill; it's also about
  professional responsibility.

Instead of boring with long paragraphs let's directly look at a few of the
people's words whom the author had interviewed to make us understand the
importance of clean code.

| Programmer                                                                      | Quote                                                                               |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `Dave Thomas` (founder of OTI)                                                  | Clean code can be read, and enhanced by a developer other than its original author. |
| `Bjarne Stroustrup` (inventor of c++)                                           | Clean code should be elegant and efficient, doing anything well.                    |
| `Grady Booch` (author of Object Oriented Analysis and Design with Applications) | Clean code is simple and direct, and never obscures the designer's intent.          |
| `Michael Feathers` (author of Working Effectively with Legacy Code)             | Clean code always looks like it was written by someone who cares.                   |

This summary comes to an end with a rule from scout practice "Leave the
campground cleaner than you found it" which is quoted by the author as something
we can take into our profession as well If we all check our code a little
cleaner than when we checked it out, the code simply could not rot he says.

Bonus: The image on the cover is M104: The Sombrero Galaxy which is around 30
million light-years from us.

## Chapter 2 - Meaningful Names

Names are important in any software. They are everywhere in the code. So let's
go through some ways/rules to find a good name.

1. Names should be in such a way that it reveals or tells us the intention of
   why it is used, what it does, etc. Example: Name the variable as
   'testPlanUnderWorkOrder' instead of 'tpUnderWO' which is not easily
   understandable by all readers.
1. Avoid names that provide wrong information about the name to the reader. ->
   No abbreviations or wrongly spelled words. -> Refer to words that actually
   mean something. Let's take 'List' as an example. Mention only the collection
   as a list until and unless it is a list else don't use that word which is
   misleading.
1. Names should be distinguished in such a way that the readers know the
   difference. -> Avoid misspelled words. -> Number series or noise words are
   meaningless until and unless they are only needed to satisfy the compiler and
   not make the words readable.
1. Name it in such a way that it is pronounceable to the reader. Eg: string
   schTPId; -> This doesn't make other readers understand what it actually
   means. string scheduleTestPlanId; -> This is pronounceable to the reader as
   it denotes the ID of the schedule test plan.
1. Names should be easily locatable or it should be searchable in the code. ->
   Always name a constant with a valid name. -> Choose longer names for
   variables inside the code and avoid using single-letter names. -> Use
   single-letter names only within local methods.
1. Try to name a variable that can be easily understood by a new developer
   instead of encoding it along with a new code.
1. Hungarian Notation - Adding the type of variables for the readers to know. It
   was used previously when no specific type of variables were introduced. Now
   with advancements, it makes it harder for readers to read the code.
1. We don't need to prefix the member variable with 'm\_' anymore.
1. Class names should have noun or noun phrase name and it should not be a verb.
1. Method should have verb or verb phrase names and it should not be a noun.
1. Always choose clarity over entertainment/cute values.
1. Go with solution domain names rather than problem domain names which makes it
   easy for programmers to read and understand without any assistance.
1. Go with problem domain names when the programmers can get assistance from
   clients easily. Place the similar context names inside a class function or
   namespace for readers to understand or else add prefixes to the names. E.g.:
   First-name, last-name, street, city, state all these signify address which
   can be grouped under address class. Otherwise, we need to prefix the names
   with addr to let the reader understand they belong to the address family.

Choosing good names may take time but it saves more than it takes. So let's all
follow these rules and try to name our variables in a good and understandable
way. Let's together become good namers.

## Chapter 3 - Functions

1. How small should a function be?
   - The indent level of a function should not be greater than one or two.
   - Blocks within if, else, and while statements should be one line long which
     should probably be a function call. This adds readability as the function
     called will have a descriptive name.
1. Do one thing
   - If you can extract another function from the original function with a name
     that is quite different from the original function, then the function
     wasn't doing one thing. Functions that do one thing cannot be divided into
     sections.
     - In order to make sure functions do one thing, we need to make sure
       statements within a function are at the same level of abstraction. Mixing
       different levels of abstraction within a function is confusing.
       [Short and nice example](https://medium.com/javarevisited/slap-that-ugly-code-6ec276d3a4bc#:~:text=Mixing%20different%20levels%20of%20abstraction,the%20same%20level%20of%20abstraction.)
     - To stay at a single level of abstraction, we should follow the Step-Down
       Rule. With this, each function introduces (uses) the next function which
       will be defined below. Here each function stays at a consistent level of
       abstraction.
     - Avoid switch and if/else chains. By nature, switch statements do more
       than one thing. When using switch statements bury them in the basement of
       the Abstract Factory class -
       [Using switch inside an Abstract Factory](https://levelup.gitconnected.com/avoid-using-switch-statements-like-this-in-your-code-b3dedea66d9)
1. Use descriptive names
   - It will help clarify the design of the modules in our minds and help us
     improve it.
1. Prefer fewer arguments
   - Do not pass Boolean (flag) arguments. It means the function does more than
     one thing. One when the flag is true and another when the flag is false.
     Instead, it could be two separate functions.
   - Avoid dyadic(2) and triadic(3) function arguments. Do not pass more than
     triadic(3) arguments.
   - How to avoid many arguments? (If applicable)
     - Create a class with the argument as a member variable of the class and
       the function as a member function.
     - Reducing the number of arguments by creating objects out of them...Yes,
       we have done it right! We have refactored our code with the same rule in
       one of the PRs.
1. Have no side effects
   - Should do only what the function is intended to do. If there are necessary
     side effects that need to be done, then the function name must be modified
     to make it clear.
1. Command and query should be separated (CQS)
   - The function should do something or return something. We should avoid
     functions that return values and change the state of the system at the same
     time since this can lead to unexpected behavior and bugs.
1. Prefer exception to return error codes and Error handling
   - When we return the error code, we create the problem that the caller must
     deal with the error immediately as below.
     - if (deletePage(page) == E_OK)
   - When using the exception, the error processing code can be separated from
     the happy path code and can be simplified.
   - It is better to extract the bodies of the try-and-catch blocks into
     functions of their own.
   - Error handling is one thing. If try exists in a function, it should be the
     very first word in the function and there should be nothing after
     catch/finally blocks.
1. Do not repeat yourself
   - Eliminate duplication to have only one source of truth and one place to
     change. This will also avoid bugs. Structured Programming: Structured
     programming is based on the idea of breaking down a program into smaller,
     simpler parts, each of which performs a specific task. This makes the
     program easier to understand, test, and maintain.
   - By following the clean code for functions, our program will be structured.

## Chapter 4 - Comments

Nothing can be quite so helpful as a well-placed comment. Nothing can be quite
so damaging as a bad comment that propagates lies and misinformation. Let's look
into the categories of good and bad comments that should be considered when you
think of adding a comment to a code.

Good Comments: A truly good comment is a comment you found a way not to write.

1. Legal comments: These involve specifying the required copyright licenses for
   the projects.
1. Informative comments: Providing basic information with a comment can be
   beneficial. For instance, explaining the use of complex regular expressions
   or detailing the return value of an abstract class. Note: If possible,
   consider moving such information to a function or a dedicated class,
   eliminating the need for the comment through clear method naming.
1. Explanation of intent: Comments can be used to clarify why certain code is
   written, especially if the rationale is not evident in the code itself. If
   the decision for that specific code is particularly distinct, it should be
   documented in a High-Level Design (HLD) document rather than in the code.
1. Clarification: It is helpful to translate the meaning of obscure arguments or
   return values into readable comments, especially when they are part of the
   standard library and cannot be altered. For example, a.comparedTo(b) == -1;
   // a < b a.comparedTo(b) == 0; // a==b
1. Warning of consequences: Issuing warnings about potential consequences can be
   valuable. For instance, if a test case is ignored, provide a comment
   explaining the reason for the omission.
1. TODO comments: If any future changes need to be made, add a TODO comment
   explaining what should be changed as a follow-up task. Once the follow-up
   tasks are addressed, make sure to remove the comment. However, if something
   can be addressed immediately, avoid leaving a comment.
1. Amplification: If a specific part of the code needs to be emphasized to
   inform programmers of its importance, especially when the code appears
   simple, use comments. For example, in the comment feature, we use trim() to
   address a crucial bug in a shared component.

Bad comments: Inaccurate comments are far worse than no comments at all

1. Mumbling: Adding irrelevant information that does not provide any value to
   other programmers because you included it at your discretion.
1. Redundant comment: Explaining a whole function in a way that makes
   programmers spend more time reading the comments than the actual code. It is
   also unnecessary to comment on every property in a class.
1. Misleading comments: Sometimes, comments are imprecise and not accurate. This
   misinformation can lead other programmers to blindly trust the comment
   instead of reviewing the code, which may perform different functionality than
   what is mentioned in the comment.
1. Mandated comments: In some languages or frameworks, there are mandatory
   comments that must be added. This might clutter up, propagate lies and lend
   to general confusion and disorganization.
1. Noise comments: These are redundant comments, adding unnecessary or
   distracting information that doesn't contribute to the code's purpose.
1. Avoid using comments when you can use functions or variables: When explaining
   the logic, utilize function names or variables, even if it requires creating
   new ones.
1. Position markers: Refrain from using position markers such as
   /////////////////// Logic starts here /////////////////.
1. Commented-out code: Avoid commenting out sections of code, as this can lead
   to confusion and raise questions about why the code is commented out.
1. Too much information: Avoid providing excessive information in comments,
   including detailed discussions and decisions to give complete context.
   Instead, offer a brief rationale and provide a link to documents or
   accessible forums where the details are explained.

## Chapter 5 - Formatting

1. Readable Code is a Must: The chapter stresses the idea that code is read far
   more often than it is written. Therefore, the primary goal of formatting is
   to enhance readability.

1. Code Tells a Story: Martin introduces the notion that well-formatted code
   should tell a story, conveying the intent of the programmer to anyone who
   reads it.

1. Vertical Formatting Matters: Vertical formatting involves the arrangement of
   lines of code. Proper vertical spacing and indentation are crucial for
   clarity, and related concepts should be kept close while less related ones
   should have more space.

1. The Three Laws of Vertical Formatting: Martin introduces three laws: "The
   Newspaper Metaphor," "Related Concepts Should Appear in Proximity," and
   "Variable Declarations Should Be Close to Their Usage." These laws guide the
   organization of code vertically.

1. Horizontal Formatting Guidelines: Keep lines short to avoid horizontal
   scrolling and make code easier to read. Long lines can be challenging to
   comprehend, and shorter lines improve code understanding.

1. Team Consistency:  
    The chapter emphasizes the importance of team rules for consistent formatting
   within a development team. Agreed-upon rules contribute to a cohesive codebase
   and facilitate collaboration.

1. A Plea for Consistency: Martin makes a passionate plea for consistency in
   code formatting. He argues that it's better to be consistently bad than
   inconsistently good because inconsistency is more disruptive.

1. Be Rigorous with Formatting: Adopt a rigorous approach to formatting.
   Consider formatting as important as any other aspect of writing code. A
   disciplined attitude towards formatting leads to cleaner, more maintainable
   code.

1. Uncle Bob's Formatting Rules: Martin shares Uncle Bob's rules, including
   guidelines for the size of functions, the ideal size of a source file, and
   the importance of vertical and horizontal spacing. These rules are practical
   and aimed at improving code quality.

1. Formatting as a Reflection of Code Quality: The chapter concludes by
   suggesting that formatting is a reflection of code quality. Clean and
   consistent formatting contributes to the overall cleanliness and
   maintainability of the code. In summary, Chapter 5 not only provides
   practical guidelines for formatting but also emphasizes the storytelling
   aspect of code. It encourages developers to view code formatting as an
   integral part of the software craftsmanship journey.

## Chapter 6 - Objects and Data Structures

Chapter 6 focuses on principles and practices related to objects, data
structures, and encapsulation.

1. Data Abstraction
   - Objects and data structures should hide their internal workings and expose
     only necessary operations.
   - Implementation details should be held back and methods should be provided
     to manipulate the encapsulated data.
   - Why is data abstraction required? By isolating the implementation details
     of a data structure, the effort put in to make any updates to the code will
     also be significantly reduced.
2. Data/ Object Anti-Symmetry
   - The key distinctions between objects and data structures are emphasized,
     along with how they are used.
   - Objects hide their internal state and expose methods to interact with that
     state.
   - Data structures often expose their data and allow direct access to their
     data elements
3. Law of Demeter
   - Objects should interact with other subjects through a limited number of
     methods.
   - The ultimate message here is to avoid chaining. A method can only operate
     on objects that are
     - Passed as arguments to the methods
     - Values of fields defined in the class
4. Data Transfer Objects
   - Data Transfer objects or DTO is a class with public variables and no
     functions. They are useful structures when communicating with databases,
     parsing messages from sockets or passing data between different layers of
     application
   - Active records are special forms of DTOs that are public structures with
     public variables primarily used to represent and interact with database
     records.
   - Why are they useful? DTOs help to encapsulate data and reduce the number of
     method calls needed to retrieve or manipulate data, improving performance
     and reducing network overhead in distributed systems.

## Chapter 7 - Error Handling

1. Use Exceptions Rather Than Return Codes: Use exceptions to handle errors
   instead of relying only on return codes. Exceptions provide a cleaner and
   more expressive way to handle errors, making code easier to read and
   maintain.
1. Use Try-Catch-Finally Blocks: The book recommends using try-catch-finally
   blocks to handle exceptions gracefully. This structure separates the normal
   code path from the error-handling logic, improving code readability and
   maintainability.
1. Provide Context with Exceptions: When throwing exceptions, it's important to
   provide context to help developers understand what went wrong. This includes
   including meaningful error messages and stack traces to aid in debugging.
   Wrap External APIs: When working with external APIs that use checked
   exceptions or throw raw exceptions, it's beneficial to wrap these exceptions
   in more meaningful and domain-specific exceptions within your codebase.
1. Define Exception Classes in Terms of Caller's Needs: When designing custom
   exception classes, focus on the needs of the caller rather than the
   implementation details of the method throwing the exception. This ensures
   that exceptions are meaningful and useful to the caller.
1. Don't Return Null: Returning null to indicate an error condition can lead to
   NullPointerExceptions and make code harder to reason about. Instead, consider
   using exceptions or special return values to handle error cases.
1. Don't Pass Null: Similarly, passing null as an argument to methods can lead
   to confusion and errors. It's better to avoid passing null whenever possible.

Examples of Error Handling in Typescript

1. Handle errors within services to encapsulate error-handling logic

   ```typescript
   getData() {
     return httpClient.get<any>('api/data').pipe(
       catchError((error: HttpErrorResponse) => {
         console.error('An error occurred:', error.message);
         return throwError('Something went wrong; please try again later.');
       })
     );
   }
   ```

2. Implement custom error handlers to provide meaningful error messages to users

   ```typescript
   class CustomErrorHandler {
     static handleError(error: any): string {
       let errorMessage = "An unknown error occurred";
       if (error instanceof HttpErrorResponse) {
         errorMessage = `Error: ${error.status} - ${error.statusText}`;
       } else if (error instanceof Error) {
         errorMessage = error.message;
       }
       return errorMessage;
     }
   }
   ```

3. Avoid swallow errors without proper handling or logging

   ```typescript
   getData() {
     return httpClient.get<any>('api/data').pipe(
       catchError(() => { return EMPTY; }) // Swallowing error without handling or logging
     );
   }
   ```

## Chapter 8 - Boundaries

Sometimes we buy third-party packages or use open source. We must cleanly
integrate this foreign code with our own. In this chapter, we look at practices
and techniques to keep the boundaries of our software clean.

### Using Third-Party Code

- Third-party providers strive for broad applicability so they can work in many
  environments and appeal to a wide audience. Users, on the other hand, want an
  interface that is focused on their particular needs.
- Example: Java Map/ C# Dictionary
  - The Map interface in Java offers utility methods such as Put(key, Value),
    Get(key), Remove(key), and Clear().
  - When passing a Map around, it may expose the Clear() function, allowing any
    user to delete its contents, which might not be desirable.
- Best Practice: Wrapping Third-Party APIs

  - It's advisable to wrap third-party APIs and exclusively utilize your
    wrapper.

    ```java
    public class Sensors
    {
      private Map<Sensor> sensors = new HashMap();

      public Sensor getById(String id)
      {
        return sensors.get(id);
      }
    }
    ```

- Minimize dependencies: In the event of a breaking change, modifications are
  confined to the wrapper, reducing the impact on the entire codebase.
- Future flexibility: You can transition to a different library in the future by
  simply modifying your wrapper.

### Exploring and Learning Boundaries

- Learning the third-party code is hard. Integrating the third-party code is
  hard too.
- Instead of experimenting and trying out the new stuff in our production code,
  we could write some automated tests to explore our understanding of the
  third-party code. These tests are commonly referred to as Learning Tests.
- Learning tests can also be utilized for assessing new releases of third-party
  packages. By running these tests, we can identify any behavioral differences
  and ensure smooth integration with our existing codebase.

### Using Code That Does Not Yet Exist

- There is another kind of boundary, one that separates the known from the
  unknown. There are often places in the code where our knowledge seems to drop
  off the edge. Sometimes what is on the other side of the boundary is
  unknowable (at least right now).
- Write the interface you want and then you can define an Adapter that bridges
  the gap between the real API (that you don’t have yet) and the API you wish
  you had.
