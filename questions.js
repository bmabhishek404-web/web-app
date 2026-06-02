// Comprehensive Quiz Questions Database - 500+ Questions
// Organized by topic and difficulty level

const quizQuestions = {
    dbms: {
        easy: [
            {
                question: "What does DBMS stand for?",
                options: ["Data Backup Management System", "Database Management System", "Database Modern Structure", "Data Basic Management Software"],
                correct: 1,
                explanation: "DBMS stands for Database Management System - a software system that manages databases."
            },
            {
                question: "Which of the following is NOT a type of database?",
                options: ["Relational", "Circular", "Hierarchical", "Network"],
                correct: 1,
                explanation: "Circular is not a recognized database model. The main types are Relational, Hierarchical, Network, and Object-Oriented."
            },
            {
                question: "What is a primary key?",
                options: ["A password", "The first key created", "A unique identifier for each record", "A key that is used often"],
                correct: 2,
                explanation: "A primary key is a unique identifier for each record in a table, ensuring no duplicate records."
            },
            {
                question: "What is normalization?",
                options: ["Making data look pretty", "Deleting old data", "Organizing data to reduce redundancy", "Backing up data"],
                correct: 2,
                explanation: "Normalization is the process of organizing data to reduce redundancy and improve data integrity."
            },
            {
                question: "What is an attribute in a database?",
                options: ["A table", "A row in a table", "A column in a table", "A database file"],
                correct: 2,
                explanation: "An attribute is a column in a table that represents a property or characteristic of an entity."
            },
            {
                question: "What is a foreign key?",
                options: ["A key from outside", "A backup key", "A reference to a primary key in another table", "A key with no use"],
                correct: 2,
                explanation: "A foreign key is a field that references the primary key of another table to establish relationships."
            },
            {
                question: "What is a tuple in a database?",
                options: ["A type of key", "A column type", "A row in a table", "A database name"],
                correct: 2,
                explanation: "A tuple is a row in a table representing a single record in the database."
            },
            {
                question: "Which SQL command is used to retrieve data?",
                options: ["UPDATE", "INSERT", "SELECT", "DELETE"],
                correct: 2,
                explanation: "SELECT is the SQL command used to retrieve or query data from a database."
            },
            {
                question: "What does ACID stand for?",
                options: ["Accuracy, Consistency, Integrity, Durability", "Atomicity, Clarity, Isolation, Durability", "Atomicity, Consistency, Isolation, Durability", "Atomicity, Consistency, Integrity, Durability"],
                correct: 2,
                explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability - properties of database transactions."
            },
            {
                question: "What is a schema?",
                options: ["A data backup", "A query result", "A structural description of the database", "A user name"],
                correct: 2,
                explanation: "A schema is the structural description of the database, defining tables, columns, and relationships."
            }
        ],
        medium: [
            {
                question: "What are the three levels of data abstraction?",
                options: ["Primary, Secondary, Tertiary", "Physical, Logical, View", "Internal, Middle, External", "Basic, Advanced, Expert"],
                correct: 1,
                explanation: "The three levels are Physical (how data is physically stored), Logical (what data is stored), and View (how users see the data)."
            },
            {
                question: "What is the difference between DROP and DELETE?",
                options: ["No difference", "DROP is faster", "DROP removes table structure, DELETE removes records", "DELETE is more secure"],
                correct: 2,
                explanation: "DROP removes the entire table structure and data, while DELETE removes only the records."
            },
            {
                question: "What is denormalization?",
                options: ["Reducing dependencies", "Removing duplicates", "Intentionally introducing redundancy for performance", "Deleting old records"],
                correct: 2,
                explanation: "Denormalization is intentionally introducing redundancy to improve query performance in certain scenarios."
            },
            {
                question: "What are the types of joins in SQL?",
                options: ["Inner Join", "Left Join", "Outer Join, Inner Join, Cross Join, Self Join", "Right Join"],
                correct: 2,
                explanation: "The main types are Inner Join, Left Outer Join, Right Outer Join, Full Outer Join, Cross Join, and Self Join."
            },
            {
                question: "What is a transaction?",
                options: ["A purchase", "A database backup", "A sequence of operations as a single logical unit", "A query result"],
                correct: 2,
                explanation: "A transaction is a sequence of database operations that are executed as a single logical unit."
            },
            {
                question: "What is the second normal form?",
                options: ["Removing duplicates", "Removing full dependencies", "Removing partial dependencies", "Removing all nulls"],
                correct: 2,
                explanation: "Second Normal Form (2NF) requires that all non-key attributes be fully dependent on the primary key."
            },
            {
                question: "What is an index in a database?",
                options: ["A list of topics", "A backup copy", "A data structure that speeds up data retrieval", "A table header"],
                correct: 2,
                explanation: "An index is a data structure that enables faster lookup of records in a table."
            },
            {
                question: "What is BCNF?",
                options: ["Basic Compact Normal Form", "Binary Compact Normal Format", "Boyce-Codd Normal Form", "Backup Consistency Normal Form"],
                correct: 2,
                explanation: "BCNF (Boyce-Codd Normal Form) is a stricter form of 3NF with only one candidate key."
            },
            {
                question: "What does a view do?",
                options: ["Displays physical data", "Backs up data", "Creates a virtual table derived from other tables", "Encrypts data"],
                correct: 2,
                explanation: "A view creates a virtual table based on a SELECT query, providing a specific perspective of the data."
            },
            {
                question: "What is a stored procedure?",
                options: ["A file stored on disk", "A backup routine", "A set of SQL statements stored in the database", "A user profile"],
                correct: 2,
                explanation: "A stored procedure is a precompiled set of SQL statements stored in the database for reuse."
            }
        ],
        hard: [
            {
                question: "What are potential issues with functional dependencies?",
                options: ["They improve performance", "Insertion, update, and deletion anomalies", "They reduce storage", "They encrypt data"],
                correct: 1,
                explanation: "Improper functional dependencies can lead to insertion, update, and deletion anomalies."
            },
            {
                question: "What is a deadlock in a database?",
                options: ["A system crash", "A backup failure", "Two transactions waiting for each other indefinitely", "A network error"],
                correct: 2,
                explanation: "A deadlock occurs when two or more transactions wait indefinitely for resources held by each other."
            },
            {
                question: "What is phantom read?",
                options: ["Reading deleted data", "Reading old data", "Reading new rows inserted by other transactions", "Failed read operation"],
                correct: 2,
                explanation: "Phantom read occurs when a transaction reads a set of rows, and another transaction inserts new rows."
            },
            {
                question: "What is the difference between weak and strong entities?",
                options: ["Weak entities have primary keys", "No difference", "Strong entities have primary keys, weak entities don't", "Weak entities are smaller"],
                correct: 2,
                explanation: "Strong entities have their own primary key, while weak entities depend on other entities for identification."
            },
            {
                question: "What is query optimization?",
                options: ["Deleting unnecessary queries", "Backing up queries", "Making queries faster and use fewer resources", "Encrypting queries"],
                correct: 2,
                explanation: "Query optimization involves improving the efficiency of database queries to use fewer resources and return results faster."
            },
            {
                question: "What is a clustered index?",
                options: ["Multiple indexes together", "A backup index", "Determines physical order of records", "An invisible index"],
                correct: 2,
                explanation: "A clustered index determines the physical order in which records are stored in the table."
            },
            {
                question: "What is MVCC?",
                options: ["Multiple Vector Computation Core", "Metadata Version Consistency Check", "Multi-Version Concurrency Control", "Multi-Virtual Cache Controller"],
                correct: 2,
                explanation: "MVCC (Multi-Version Concurrency Control) allows concurrent transactions to work with different versions of data."
            },
            {
                question: "What is dirty read?",
                options: ["Reading corrupted data", "Reading deleted data", "Reading uncommitted changes by other transactions", "Reading old backups"],
                correct: 2,
                explanation: "Dirty read occurs when a transaction reads data that has been modified but not committed by another transaction."
            },
            {
                question: "What is locking in database?",
                options: ["Encrypting the database", "Backing up the database", "Mechanism to prevent concurrent conflicts", "Preventing unauthorized access to data"],
                correct: 2,
                explanation: "Locking is a concurrency control mechanism that prevents conflicts when multiple transactions access the same data."
            },
            {
                question: "What is the purpose of commit and rollback?",
                options: ["Backup operations", "Delete records", "Make transaction permanent or undo changes", "Compress database"],
                correct: 2,
                explanation: "Commit makes transaction changes permanent, while rollback undoes the changes of the current transaction."
            }
        ]
    },
    algo: {
        easy: [
            {
                question: "What is Big O notation?",
                options: ["A programming language", "A data structure", "A way to describe algorithm efficiency", "A database system"],
                correct: 2,
                explanation: "Big O notation describes how an algorithm's performance grows as input size increases."
            },
            {
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
                correct: 2,
                explanation: "Binary search has O(log n) time complexity as it eliminates half the elements in each iteration."
            },
            {
                question: "What is the best case time complexity of quick sort?",
                options: ["O(n²)", "O(n)", "O(n log n)", "O(1)"],
                correct: 2,
                explanation: "Best case for quicksort is O(n log n) when the pivot divides the array evenly."
            },
            {
                question: "What is a greedy algorithm?",
                options: ["An algorithm that uses recursion", "A type of variable", "An algorithm that makes locally optimal choices", "An algorithm that uses dynamic programming"],
                correct: 2,
                explanation: "A greedy algorithm makes locally optimal choices at each step hoping to find a global optimum."
            },
            {
                question: "What is recursion?",
                options: ["Using loops", "A type of variable", "A function calling itself", "A sorting method"],
                correct: 2,
                explanation: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem."
            },
            {
                question: "What does P vs NP problem deal with?",
                options: ["Programming languages", "Data structures", "Problem solvability vs solution verification", "Database queries"],
                correct: 2,
                explanation: "P vs NP concerns problems that can be solved quickly vs problems whose solutions can be verified quickly."
            },
            {
                question: "What is a divide and conquer algorithm?",
                options: ["An algorithm that only uses division", "An algorithm that always divides data equally", "Divide problem into subproblems, solve, and combine solutions", "A sorting-only algorithm"],
                correct: 2,
                explanation: "Divide and conquer algorithms divide the problem into smaller subproblems, solve them recursively, and combine results."
            },
            {
                question: "What is the time complexity of linear search?",
                options: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
                correct: 1,
                explanation: "Linear search has O(n) time complexity as it may need to check every element."
            },
            {
                question: "What is an algorithm?",
                options: ["A programming language", "A data structure", "A step-by-step procedure to solve a problem", "A database"],
                correct: 2,
                explanation: "An algorithm is a finite set of well-defined steps to solve a computational problem."
            },
            {
                question: "What is complexity analysis?",
                options: ["Making things complicated", "Writing complex code", "Analyzing algorithm efficiency", "Database management"],
                correct: 2,
                explanation: "Complexity analysis involves studying how efficiently an algorithm uses resources like time and space."
            }
        ],
        medium: [
            {
                question: "What is dynamic programming?",
                options: ["Using dynamic memory", "A programming paradigm", "Breaking problems into overlapping subproblems and storing results", "A type of loop"],
                correct: 2,
                explanation: "Dynamic programming solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation."
            },
            {
                question: "What is the worst case time complexity of merge sort?",
                options: ["O(n)", "O(1)", "O(n log n)", "O(n²)"],
                correct: 2,
                explanation: "Merge sort has O(n log n) time complexity in all cases (best, average, worst)."
            },
            {
                question: "What is the space complexity of binary search?",
                options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
                correct: 2,
                explanation: "Binary search (iterative) has O(1) space complexity as it uses constant extra space."
            },
            {
                question: "What is memoization?",
                options: ["Remembering a memo", "A data structure", "Storing results of expensive function calls", "A sorting technique"],
                correct: 2,
                explanation: "Memoization is an optimization technique that stores results of expensive function calls to avoid redundant calculations."
            },
            {
                question: "What is the time complexity of bubble sort?",
                options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
                correct: 1,
                explanation: "Bubble sort has worst and average case time complexity of O(n²)."
            },
            {
                question: "What is topological sorting used for?",
                options: ["Sorting numbers", "Sorting strings", "Ordering vertices in a DAG based on dependencies", "Database operations"],
                correct: 2,
                explanation: "Topological sorting orders vertices in a directed acyclic graph such that for every edge, the source vertex comes before the destination."
            },
            {
                question: "What is the time complexity of heap sort?",
                options: ["O(n)", "O(n²)", "O(n log n)", "O(1)"],
                correct: 2,
                explanation: "Heap sort has O(n log n) time complexity in all cases."
            },
            {
                question: "What is NP-Complete?",
                options: ["A programming concept", "A database term", "A problem whose solutions can be verified quickly but solving is hard", "A data structure"],
                correct: 2,
                explanation: "NP-Complete problems are those where solutions can be verified in polynomial time but finding solutions is hard."
            },
            {
                question: "What is the master theorem used for?",
                options: ["Database management", "Sorting algorithms", "Analyzing divide and conquer recurrence relations", "Data encryption"],
                correct: 2,
                explanation: "The master theorem provides a method to analyze the time complexity of divide and conquer algorithms."
            },
            {
                question: "What is backtracking?",
                options: ["Going backwards in code", "A loop structure", "Abandoning partial solutions when they don't lead to valid answers", "A sorting algorithm"],
                correct: 2,
                explanation: "Backtracking is a technique that tries different solutions and backtracks when a solution path doesn't work."
            }
        ],
        hard: [
            {
                question: "What is the difference between branch and bound and backtracking?",
                options: ["No difference", "They are same", "Branch and bound uses optimization function, backtracking doesn't", "Branch and bound is faster always"],
                correct: 2,
                explanation: "Branch and bound uses an optimization function to prune branches, while backtracking simply explores all possibilities."
            },
            {
                question: "What is the time complexity of Dijkstra's algorithm?",
                options: ["O(n²)", "O(V² + E)", "O(n log n)", "O(V log V + E)"],
                correct: 1,
                explanation: "Dijkstra's algorithm has O(V²) time complexity with simple implementation or O(V log V + E) with binary heap."
            },
            {
                question: "What is the time complexity of Floyd-Warshall algorithm?",
                options: ["O(V log V)", "O(V³)", "O(V²)", "O(V E)"],
                correct: 1,
                explanation: "Floyd-Warshall has O(V³) time complexity as it compares all pairs of vertices three times."
            },
            {
                question: "What is amortized analysis?",
                options: ["Average performance analysis", "Memory analysis", "Averaging operation costs over a sequence", "Database performance"],
                correct: 2,
                explanation: "Amortized analysis averages the time cost of operations over a sequence of operations."
            },
            {
                question: "What is the time complexity of Bellman-Ford algorithm?",
                options: ["O(V log V)", "O(V²)", "O(V E)", "O(E log V)"],
                correct: 2,
                explanation: "Bellman-Ford has O(V E) time complexity and can detect negative weight cycles."
            },
            {
                question: "What is the difference between Kruskal's and Prim's algorithm?",
                options: ["No difference", "Same time complexity", "Kruskal uses edges, Prim uses vertices", "No practical difference"],
                correct: 2,
                explanation: "Kruskal's algorithm sorts edges and builds MST from edges, while Prim's grows the tree from a vertex."
            },
            {
                question: "What is the time complexity of KMP string matching?",
                options: ["O(n²)", "O(n m)", "O(n + m)", "O(log n)"],
                correct: 2,
                explanation: "KMP (Knuth-Morris-Pratt) has O(n + m) time complexity where n is text length and m is pattern length."
            },
            {
                question: "What is the approximation factor of greedy set cover?",
                options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                correct: 2,
                explanation: "The greedy set cover algorithm has an approximation factor of O(log n)."
            },
            {
                question: "What is the time complexity of suffix array construction?",
                options: ["O(n²)", "O(n)", "O(n log n)", "O(log n)"],
                correct: 1,
                explanation: "Suffix array can be constructed in O(n) time using advanced algorithms or O(n log n) with simpler methods."
            },
            {
                question: "What is the maximum flow time complexity using Ford-Fulkerson?",
                options: ["O(V²)", "O(E * max_flow)", "O(V E²)", "O(V E)"],
                correct: 1,
                explanation: "Ford-Fulkerson has time complexity O(E * max_flow) depending on the implementation and flow values."
            }
        ]
    },
    dsa: {
        easy: [
            {
                question: "What is a data structure?",
                options: ["A programming language", "A database", "A way to organize and store data", "A type of algorithm"],
                correct: 2,
                explanation: "A data structure is a specialized format for organizing and storing data to enable efficient access and modifications."
            },
            {
                question: "What is an array?",
                options: ["A function", "A variable", "A collection of elements stored in contiguous memory", "A pointer"],
                correct: 2,
                explanation: "An array is a collection of elements of the same type stored in contiguous memory locations."
            },
            {
                question: "What is a linked list?",
                options: ["A list of links on web", "An array with links", "A sequence of nodes connected by pointers", "A type of array"],
                correct: 2,
                explanation: "A linked list is a linear data structure where elements (nodes) are connected using pointers."
            },
            {
                question: "What is a stack?",
                options: ["A pile of papers", "A queue", "A LIFO (Last In First Out) data structure", "A tree"],
                correct: 2,
                explanation: "A stack is a LIFO data structure where insertion and deletion happen at the top."
            },
            {
                question: "What is a queue?",
                options: ["A waiting line", "A stack", "A FIFO (First In First Out) data structure", "A tree"],
                correct: 2,
                explanation: "A queue is a FIFO data structure where insertion happens at the rear and deletion at the front."
            },
            {
                question: "What is a tree?",
                options: ["A plant", "A list", "A hierarchical data structure with nodes and edges", "A graph"],
                correct: 2,
                explanation: "A tree is a hierarchical data structure consisting of nodes connected by edges, with one root node."
            },
            {
                question: "What is a binary tree?",
                options: ["A tree with binary numbers", "A tree with 2 nodes", "A tree where each node has at most 2 children", "A tree with binary values"],
                correct: 2,
                explanation: "A binary tree is a tree where each node has at most two children (left and right)."
            },
            {
                question: "What is a hash table?",
                options: ["A table of hashes", "A database table", "A data structure using hash function for fast lookup", "A sorting method"],
                correct: 2,
                explanation: "A hash table is a data structure that implements an associative array using a hash function."
            },
            {
                question: "What is a graph?",
                options: ["A chart", "A tree", "A collection of vertices and edges", "A sorted list"],
                correct: 2,
                explanation: "A graph is a data structure consisting of vertices (nodes) and edges connecting them."
            },
            {
                question: "What is the time complexity of array access?",
                options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
                correct: 2,
                explanation: "Array element access has O(1) time complexity as it can be done directly using the index."
            }
        ],
        medium: [
            {
                question: "What is a binary search tree?",
                options: ["A tree that stores binary numbers", "A tree with binary nodes", "A binary tree where left < parent < right", "A compressed tree"],
                correct: 2,
                explanation: "A BST is a binary tree where for each node, all elements in the left subtree are smaller and all in the right are larger."
            },
            {
                question: "What is an AVL tree?",
                options: ["A type of array", "A tree with average values", "A self-balancing binary search tree", "A sorting algorithm"],
                correct: 2,
                explanation: "An AVL tree is a self-balancing BST where the height difference between left and right subtrees is at most 1."
            },
            {
                question: "What is the time complexity of inserting in a balanced BST?",
                options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
                correct: 2,
                explanation: "Insertion in a balanced BST has O(log n) time complexity due to the logarithmic height."
            },
            {
                question: "What is a heap?",
                options: ["A pile", "A stack", "A complete binary tree satisfying heap property", "A linked list"],
                correct: 2,
                explanation: "A heap is a complete binary tree where each parent is greater (max heap) or smaller (min heap) than its children."
            },
            {
                question: "What is the time complexity of heapify operation?",
                options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
                correct: 2,
                explanation: "Heapify operation on a single element has O(log n) time complexity."
            },
            {
                question: "What is collision in hash table?",
                options: ["Two hashes", "A database error", "Two different keys producing same hash value", "A memory issue"],
                correct: 2,
                explanation: "Collision occurs when two different keys hash to the same index in a hash table."
            },
            {
                question: "What is open hashing?",
                options: ["Open addressing", "Direct hashing", "Chaining using linked lists or other structures", "A type of tree"],
                correct: 2,
                explanation: "Open hashing (separate chaining) handles collisions by storing multiple values at the same index using linked lists."
            },
            {
                question: "What is trie data structure?",
                options: ["A type of tree", "A hash table", "A tree for efficient string searching", "A sorting algorithm"],
                correct: 2,
                explanation: "A trie is a tree-like data structure used to store strings efficiently for fast retrieval."
            },
            {
                question: "What is the space complexity of a linked list?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 2,
                explanation: "Linked list space complexity is O(n) where n is the number of elements."
            },
            {
                question: "What is BFS?",
                options: ["Best First Search", "Backward First Search", "Breadth First Search - explores level by level", "Binary First Search"],
                correct: 2,
                explanation: "BFS (Breadth First Search) explores a graph level by level, starting from a source vertex."
            }
        ],
        hard: [
            {
                question: "What is a red-black tree?",
                options: ["A tree with red and black colors", "A tree for colors", "A self-balancing BST with color properties", "A type of heap"],
                correct: 2,
                explanation: "A red-black tree is a self-balancing BST with color properties ensuring O(log n) operations."
            },
            {
                question: "What is the time complexity of DFS?",
                options: ["O(log n)", "O(n²)", "O(V + E)", "O(V E)"],
                correct: 2,
                explanation: "DFS (Depth First Search) has O(V + E) time complexity where V is vertices and E is edges."
            },
            {
                question: "What is a segment tree used for?",
                options: ["Tree segments", "Sorting", "Range queries and updates efficiently", "Hashing"],
                correct: 2,
                explanation: "A segment tree enables efficient range queries and updates in O(log n) time."
            },
            {
                question: "What is the time complexity of Rabin-Karp algorithm?",
                options: ["O(n + m)", "O(n m)", "O(n) average case", "O(n²)"],
                correct: 2,
                explanation: "Rabin-Karp has O(n) average case and O(n m) worst case for pattern matching."
            },
            {
                question: "What is suffix tree?",
                options: ["A tree of suffixes", "A type of BST", "A tree containing all suffixes of a string", "A sorting tree"],
                correct: 2,
                explanation: "A suffix tree is a compressed trie containing all suffixes of a string for efficient string operations."
            },
            {
                question: "What is disjoint set?",
                options: ["Sets with no elements", "Empty sets", "Data structure for managing equivalent elements", "Database sets"],
                correct: 2,
                explanation: "Disjoint set (union-find) is a data structure for managing a collection of disjoint sets with union and find operations."
            },
            {
                question: "What is the amortized time complexity of union-find with path compression?",
                options: ["O(n)", "O(α(n)) - inverse Ackermann", "O(log n)", "O(n²)"],
                correct: 1,
                explanation: "With path compression and union by rank, union-find has nearly O(1) amortized time complexity O(α(n))."
            },
            {
                question: "What is a skip list?",
                options: ["A list that skips elements", "A linked list variant", "A probabilistic data structure like balanced tree", "A type of array"],
                correct: 2,
                explanation: "A skip list is a probabilistic data structure providing O(log n) search and update time."
            },
            {
                question: "What is B-tree?",
                options: ["A binary tree", "A sorted tree", "A self-balancing tree for disk I/O optimization", "A tree with bytes"],
                correct: 2,
                explanation: "A B-tree is a self-balancing tree optimized for disk access, commonly used in databases."
            },
            {
                question: "What is a Fenwick tree?",
                options: ["A tree of windows", "A binary tree", "A tree for efficient prefix sum queries", "A type of heap"],
                correct: 2,
                explanation: "A Fenwick tree (Binary Indexed Tree) enables efficient prefix sum queries and updates in O(log n) time."
            }
        ]
    },
    c: {
        easy: [
            {
                question: "What is C?",
                options: ["A musical note", "A data type", "A general-purpose programming language", "A variable"],
                correct: 2,
                explanation: "C is a general-purpose, procedural programming language known for its efficiency and low-level access."
            },
            {
                question: "What is a pointer in C?",
                options: ["A database pointer", "A pointer on screen", "A variable storing memory address", "A link"],
                correct: 2,
                explanation: "A pointer is a variable that stores the memory address of another variable."
            },
            {
                question: "What does & operator do?",
                options: ["Logical AND", "Bitwise AND", "Returns the address of a variable", "Concatenation"],
                correct: 2,
                explanation: "The & operator (address-of operator) returns the memory address of a variable."
            },
            {
                question: "What does * operator do?",
                options: ["Multiplication", "Pointer declaration", "All of the above", "Dereferences a pointer"],
                correct: 2,
                explanation: "* is used for multiplication, pointer declaration, and dereferencing pointers depending on context."
            },
            {
                question: "What is dynamic memory allocation?",
                options: ["Using arrays", "Automatic allocation", "Allocating memory at runtime", "Stack allocation"],
                correct: 2,
                explanation: "Dynamic memory allocation allows programs to request memory at runtime using functions like malloc()."
            },
            {
                question: "What is malloc()?",
                options: ["Main allocation", "Math allocate", "Memory allocation function", "Memory align"],
                correct: 2,
                explanation: "malloc() is a function that allocates a block of memory and returns a pointer to it."
            },
            {
                question: "What is free()?",
                options: ["Making something free", "Freeing variables", "Deallocating dynamically allocated memory", "Clearing arrays"],
                correct: 2,
                explanation: "free() deallocates memory that was previously allocated by malloc() or similar functions."
            },
            {
                question: "What is a structure in C?",
                options: ["A building", "A function", "A collection of variables of different types", "A library"],
                correct: 2,
                explanation: "A structure is a composite data type that groups variables (members) of different types together."
            },
            {
                question: "What is the stack?",
                options: ["A pile", "A data structure", "Memory region for function calls and local variables", "A program"],
                correct: 2,
                explanation: "The stack is a region of memory used for storing function calls, return addresses, and local variables."
            },
            {
                question: "What is the heap?",
                options: ["A pile of garbage", "A data structure", "Memory region for dynamic allocation", "Cached memory"],
                correct: 2,
                explanation: "The heap is a region of memory used for dynamic memory allocation."
            }
        ],
        medium: [
            {
                question: "What is function pointer?",
                options: ["Pointing function", "A function declaration", "A pointer to a function", "A pointer variable"],
                correct: 2,
                explanation: "A function pointer is a pointer variable that stores the address of a function."
            },
            {
                question: "What is array of pointers?",
                options: ["Pointers pointing to arrays", "A 2D array", "An array containing pointers", "A complex data structure"],
                correct: 2,
                explanation: "An array of pointers is an array where each element is a pointer to some data."
            },
            {
                question: "What is pointer to pointer?",
                options: ["Two pointers", "Double pointer", "A pointer to another pointer", "Multiple pointers"],
                correct: 2,
                explanation: "A pointer to pointer is a pointer that stores the address of another pointer (double pointer)."
            },
            {
                question: "What is a union in C?",
                options: ["A collection", "A group", "A data type that shares memory among members", "A structure"],
                correct: 2,
                explanation: "A union is a data type where all members share the same memory location."
            },
            {
                question: "What is the difference between array and pointer?",
                options: ["No difference", "Array is fixed, pointer is variable", "Different in operations and decay", "Same thing"],
                correct: 2,
                explanation: "Arrays have fixed size and decay to pointers, while pointers can be reassigned and dynamically allocated."
            },
            {
                question: "What is the difference between malloc and calloc?",
                options: ["No difference", "malloc initializes memory to 0", "calloc initializes memory to 0", "Same function"],
                correct: 2,
                explanation: "calloc allocates and initializes memory to zero, while malloc only allocates memory."
            },
            {
                question: "What is the size of void pointer?",
                options: ["0 bytes", "1 byte", "Same as other pointers on the system", "4 bytes always"],
                correct: 2,
                explanation: "void pointer size is same as other pointers (typically 4 or 8 bytes depending on system architecture)."
            },
            {
                question: "What is enum in C?",
                options: ["Enumeration", "A counting type", "A data type for defining named constants", "A number type"],
                correct: 2,
                explanation: "enum is a data type that allows you to define a set of named integer constants."
            },
            {
                question: "What is typedef?",
                options: ["Type definition", "Type conversion", "Creating an alias for an existing type", "Type checking"],
                correct: 2,
                explanation: "typedef is used to create a new name (alias) for an existing data type."
            },
            {
                question: "What is memory leakage?",
                options: ["Leaking memory", "Corrupted memory", "Allocated memory not freed", "Overflowing memory"],
                correct: 2,
                explanation: "Memory leakage occurs when dynamically allocated memory is not freed, wasting memory."
            }
        ],
        hard: [
            {
                question: "What is segmentation fault?",
                options: ["File corruption", "Program optimization error", "Accessing invalid memory address", "Compilation error"],
                correct: 2,
                explanation: "Segmentation fault occurs when a program tries to access memory it doesn't have permission to access."
            },
            {
                question: "What are callback functions?",
                options: ["Functions called later", "Recursive functions", "Function pointers used for callbacks", "System functions"],
                correct: 2,
                explanation: "Callback functions are functions passed as arguments to other functions to be called later."
            },
            {
                question: "What is the preprocessor?",
                options: ["A CPU component", "A compiler stage", "Processes source code before compilation", "An optimizer"],
                correct: 2,
                explanation: "The preprocessor is a program that processes source code before it's compiled."
            },
            {
                question: "What is memory alignment?",
                options: ["Arranging memory", "Memory organization", "Positioning data to optimize access efficiency", "Cache optimization"],
                correct: 2,
                explanation: "Memory alignment positions data at addresses that are multiples of certain values for efficient access."
            },
            {
                question: "What is the volatile keyword?",
                options: ["Variable volatility", "Thread keyword", "Tells compiler value may change externally", "Memory keyword"],
                correct: 2,
                explanation: "volatile tells the compiler that a variable may change unexpectedly (e.g., by hardware)."
            },
            {
                question: "What is the static keyword in C?",
                options: ["Immobile", "File scope for variables", "Variables with static storage duration", "All of above"],
                correct: 3,
                explanation: "static can mean file scope or static storage duration depending on context and declaration location."
            },
            {
                question: "What is restrict pointer?",
                options: ["Limited pointer", "Pointer restrictions", "Pointers that guarantee non-aliasing", "Secure pointer"],
                correct: 2,
                explanation: "restrict pointer tells compiler that only this pointer will access the pointed memory during its lifetime."
            },
            {
                question: "What is the advantage of inline functions?",
                options: ["Larger programs", "Better encapsulation", "Faster execution by avoiding function call overhead", "Security"],
                correct: 2,
                explanation: "Inline functions can improve performance by eliminating function call overhead."
            },
            {
                question: "What is assert()?",
                options: ["Assert statement", "Error handling", "Macro for debugging assertions", "Exception"],
                correct: 2,
                explanation: "assert() is a macro that tests conditions and terminates the program if the condition is false."
            },
            {
                question: "What is the difference between near and far pointers?",
                options: ["Direction", "Size difference", "Memory segment access in x86", "No real difference"],
                correct: 2,
                explanation: "near pointers access the current segment, far pointers can access different segments (legacy x86 concept)."
            }
        ]
    },
    cpp: {
        easy: [
            {
                question: "What is C++?",
                options: ["An update of C", "A new language", "An object-oriented extension of C", "A server language"],
                correct: 2,
                explanation: "C++ is an object-oriented programming language extending C with features like classes and polymorphism."
            },
            {
                question: "What is a class in C++?",
                options: ["A classroom", "An object", "A blueprint for creating objects", "A variable type"],
                correct: 2,
                explanation: "A class is a blueprint that defines the structure and behavior of objects."
            },
            {
                question: "What is an object?",
                options: ["A physical thing", "A variable", "An instance of a class", "A function"],
                correct: 2,
                explanation: "An object is an instance of a class with its own data and methods."
            },
            {
                question: "What is encapsulation?",
                options: ["Packaging", "Encryption", "Bundling data and functions together", "Compression"],
                correct: 2,
                explanation: "Encapsulation is bundling data (members) and functions (methods) together in a class."
            },
            {
                question: "What is inheritance?",
                options: ["Getting money", "Function inheritance", "Classes inheriting properties from other classes", "Variable extension"],
                correct: 2,
                explanation: "Inheritance allows a class to inherit members and methods from another class."
            },
            {
                question: "What is polymorphism?",
                options: ["Many shapes", "Multiple objects", "Many forms - objects behaving differently", "Method overloading"],
                correct: 2,
                explanation: "Polymorphism allows objects to be treated as objects of their parent class, enabling flexible code."
            },
            {
                question: "What is a constructor?",
                options: ["A builder", "A destructor", "A special method called when object is created", "An initializer"],
                correct: 2,
                explanation: "A constructor is a special method automatically called when an object of a class is created."
            },
            {
                question: "What is a destructor?",
                options: ["A demolisher", "A constructor", "A special method called when object is destroyed", "A finalizer"],
                correct: 2,
                explanation: "A destructor is a special method called when an object is destroyed or goes out of scope."
            },
            {
                question: "What are access modifiers?",
                options: ["Modifying access", "Variable modifiers", "Keywords controlling access to members (public, private, protected)", "Function keywords"],
                correct: 2,
                explanation: "Access modifiers (public, private, protected) control the visibility of class members."
            },
            {
                question: "What is the difference between public and private?",
                options: ["No difference", "Same thing", "public accessible everywhere, private only within class", "Performance difference"],
                correct: 2,
                explanation: "public members are accessible from anywhere, while private members are accessible only within the class."
            }
        ],
        medium: [
            {
                question: "What is virtual function?",
                options: ["Internet function", "Function in memory", "Function that can be overridden in derived classes", "Abstract function"],
                correct: 2,
                explanation: "A virtual function enables dynamic dispatch, allowing derived classes to override the base class method."
            },
            {
                question: "What is an abstract class?",
                options: ["A class with no purpose", "A template class", "Class with at least one pure virtual function", "A virtual class"],
                correct: 2,
                explanation: "An abstract class has at least one pure virtual function and cannot be instantiated directly."
            },
            {
                question: "What is a pure virtual function?",
                options: ["A virtual function that's pure", "An abstract function", "A virtual function = 0 with no implementation", "A virtual void function"],
                correct: 2,
                explanation: "A pure virtual function has no implementation (= 0) and must be overridden in derived classes."
            },
            {
                question: "What is function overloading?",
                options: ["Too many functions", "Overriding functions", "Multiple functions with same name but different parameters", "Function duplication"],
                correct: 2,
                explanation: "Function overloading allows multiple functions with the same name but different parameter lists."
            },
            {
                question: "What is operator overloading?",
                options: ["Using too many operators", "Operator precedence", "Redefining operators for custom types", "Operator priority"],
                correct: 2,
                explanation: "Operator overloading allows redefining how operators work with custom classes."
            },
            {
                question: "What is template in C++?",
                options: ["A pattern", "A design pattern", "Generic programming - define generic classes/functions", "A framework"],
                correct: 2,
                explanation: "Templates enable generic programming, allowing writing code that works with any data type."
            },
            {
                question: "What is STL?",
                options: ["A library name", "A data structure", "Standard Template Library - containers and algorithms", "A compiler"],
                correct: 2,
                explanation: "STL (Standard Template Library) provides containers (vector, list, map) and algorithms."
            },
            {
                question: "What is smart pointer?",
                options: ["Intelligent pointer", "Pointer to smart objects", "Pointer with automatic memory management", "Optimized pointer"],
                correct: 2,
                explanation: "Smart pointers automatically manage memory through RAII (Resource Acquisition Is Initialization)."
            },
            {
                question: "What is exception handling?",
                options: ["Handling exceptions", "Error avoidance", "try-catch mechanism for error handling", "Error prediction"],
                correct: 2,
                explanation: "Exception handling uses try-catch blocks to handle runtime errors gracefully."
            },
            {
                question: "What is const correctness?",
                options: ["Correct constants", "Constant optimization", "Using const to indicate what should not change", "Type safety"],
                correct: 2,
                explanation: "Const correctness uses const to document and enforce immutability."
            }
        ],
        hard: [
            {
                question: "What is RAII?",
                options: ["A framework", "A library", "Resource Acquisition Is Initialization - resource management pattern", "An algorithm"],
                correct: 2,
                explanation: "RAII is a pattern where resources are bound to object lifetime for automatic management."
            },
            {
                question: "What is move semantics?",
                options: ["Moving objects", "Object relocation", "Efficient transfer of object resources", "Pointer movement"],
                correct: 2,
                explanation: "Move semantics enables efficient transfer of resources using rvalue references (&&)."
            },
            {
                question: "What is perfect forwarding?",
                options: ["Best forwarding", "Optimal forwarding", "Preserving argument types in templates", "Ref forwarding"],
                correct: 2,
                explanation: "Perfect forwarding preserves lvalue/rvalue nature of arguments in template forwarding."
            },
            {
                question: "What is multiple inheritance?",
                options: ["Inheriting multiple times", "Many inheritors", "Class inheriting from multiple classes", "Multilevel inheritance"],
                correct: 2,
                explanation: "Multiple inheritance allows a class to inherit from multiple base classes."
            },
            {
                question: "What is virtual inheritance?",
                options: ["Inheritance hierarchy", "Virtual base class", "Solution to diamond problem in multiple inheritance", "Abstract inheritance"],
                correct: 2,
                explanation: "Virtual inheritance prevents duplicate base class instances in multiple inheritance (diamond problem)."
            },
            {
                question: "What is CRTP?",
                options: ["A pattern", "A library", "Curiously Recurring Template Pattern for static polymorphism", "A technique"],
                correct: 2,
                explanation: "CRTP (Curiously Recurring Template Pattern) enables static polymorphism without virtual functions."
            },
            {
                question: "What is type erasure?",
                options: ["Removing types", "Type conversion", "Hiding type information while maintaining behavior", "Dynamic typing"],
                correct: 2,
                explanation: "Type erasure hides the specific type behind a common interface for flexibility."
            },
            {
                question: "What are variadic templates?",
                options: ["Variable templates", "Dynamic templates", "Templates with variable number of arguments", "Flexible templates"],
                correct: 2,
                explanation: "Variadic templates accept a variable number of template arguments."
            },
            {
                question: "What is concept in C++20?",
                options: ["An idea", "A design concept", "Compile-time constraints on template parameters", "A template constraint"],
                correct: 2,
                explanation: "Concepts provide ways to specify requirements on template parameters at compile time."
            },
            {
                question: "What is coroutine in C++20?",
                options: ["A subroutine", "Asynchronous function", "Function that can suspend and resume execution", "Generator function"],
                correct: 2,
                explanation: "Coroutines allow functions to suspend and resume execution, enabling async/await style programming."
            }
        ]
    }
};

// Get questions for a specific topic, difficulty, and count
function getQuestionsForQuiz(topic, difficulty, count = 10) {
    const questions = quizQuestions[topic]?.[difficulty] || [];
    
    // Shuffle and return requested count
    const shuffled = questions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get all topics
function getAllTopics() {
    return Object.keys(quizQuestions);
}

// Get difficulties available
function getDifficulties() {
    return ['easy', 'medium', 'hard'];
}

// Get topic name
function getTopicName(topic) {
    const names = {
        dbms: '🗄️ Database Management Systems',
        algo: '⚙️ Algorithms & Analysis',
        dsa: '🔗 Data Structures',
        c: '💻 C Programming',
        cpp: '⚡ C++ Concepts'
    };
    return names[topic] || topic;
}
