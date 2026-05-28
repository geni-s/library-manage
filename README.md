# Library Management System 

A simple and beginner-friendly Library Management System built using HTML, CSS, JavaScript, and Firebase.

This project allows admins to manage books while users can search, borrow books easily through a clean web interface.Admin can also return books.

---

# Features

## Admin Features

- Secure Admin Login using Firebase Authentication
- Add New Books
- Manage Library Records
- View All Books
- Return Books
- Track Borrowed Books
- Can Delete Users

---

## User Features

- View Available Books
- Borrow Books
- search books by filters

---

# Technologies Used

- HTML
- CSS
- JavaScript
- Firebase Authentication
- Firebase Firestore Database

---

# Firebase Features Used

## Firebase Authentication

Used for secure admin login system.

## Firestore Database

Used to store:

- Books
- Users
- Borrowed Books

---


#  How To Run The Project

U can access it here -  https://magnificent-palmier-d0193f.netlify.app/

## 1️⃣ Clone Repository

```bash
git clone https://github.com/geni-s/library-manage.git
```

---

## 2️⃣ Open Project

Open the folder in VS Code.

---

## 3️⃣ Run Website

Use Live Server Extension

OR

Open `index.html`

---

#  Admin Login Credentials

```txt
Email: admin@gmail.com
Password: adminhumai
```

---



#  How The System Works

## ➕ Add Book

- Admin adds books
- Data gets stored in Firestore Database

---

## 🔍 Search Book

- User searches by book name or author or by choosing 
- Matching books are displayed instantly

---

## 🔍 show book

- You can also see all avaliable books by clicking show book

---



## 📖 Borrow Book

- User clicks Borrow button
- Book data gets stored in `borrowedBooks`
- Quantity decreases automatically

---

## 🔄 Return Book

- User clicks Return button
- Quantity increases automatically
- Borrowed entry gets deleted

---
